import { useState, useEffect, createContext, useContext } from "react";
import { InlineEditor } from "./InlineEditor";

// Contexto global para el estado de edición que funciona en toda la app
const GlobalEditModeContext = createContext({
  isEditMode: false,
  toggleEditMode: () => {},
  hasUnsavedChanges: false,
  setHasUnsavedChanges: (value: boolean) => {}
});

export const useGlobalEditMode = () => useContext(GlobalEditModeContext);

// Provider que se puede usar en cualquier parte de la app
export function GlobalEditModeProvider({ 
  children, 
  isEditMode = false,
  onToggleEditMode = () => {},
  hasUnsavedChanges = false,
  onSetHasUnsavedChanges = () => {}
}: {
  children: React.ReactNode;
  isEditMode?: boolean;
  onToggleEditMode?: () => void;
  hasUnsavedChanges?: boolean;
  onSetHasUnsavedChanges?: (value: boolean) => void;
}) {
  return (
    <GlobalEditModeContext.Provider value={{
      isEditMode,
      toggleEditMode: onToggleEditMode,
      hasUnsavedChanges,
      setHasUnsavedChanges: onSetHasUnsavedChanges
    }}>
      {children}
    </GlobalEditModeContext.Provider>
  );
}

// Types for content management
export interface EditableContent {
  id: string;
  content: string;
  type: 'text' | 'textarea' | 'image' | 'link';
  section: string;
}

// Hook para gestionar contenido editable
export function useEditableContent() {
  const [content, setContent] = useState<Record<string, EditableContent>>({});
  const { setHasUnsavedChanges } = useGlobalEditMode();

  // Cargar contenido desde localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('mapdesign_editable_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading content:', error);
      }
    }
  }, []);

  // Guardar contenido en localStorage
  const saveContent = (contentData: Record<string, EditableContent>) => {
    localStorage.setItem('mapdesign_editable_content', JSON.stringify(contentData));
    setContent(contentData);
    setHasUnsavedChanges(false);
  };

  // Actualizar contenido específico
  const updateContent = (id: string, newContent: string, type: EditableContent['type'] = 'text', section: string = 'general') => {
    const updatedContent = {
      ...content,
      [id]: {
        id,
        content: newContent,
        type,
        section
      }
    };
    setContent(updatedContent);
    setHasUnsavedChanges(true);
    
    // Auto-save inmediato en localStorage (sin llamar a saveContent para evitar conflictos)
    localStorage.setItem('mapdesign_editable_content', JSON.stringify(updatedContent));
  };

  // Obtener contenido por ID
  const getContent = (id: string, defaultContent: string = '') => {
    return content[id]?.content || defaultContent;
  };

  return {
    content,
    updateContent,
    getContent,
    saveContent
  };
}

// Componente wrapper para contenido editable
interface EditableProps {
  id: string;
  defaultContent: string;
  type?: 'text' | 'textarea' | 'image' | 'link';
  section?: string;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  inline?: boolean;
  children?: (content: string) => React.ReactNode;
}

export function Editable({ 
  id, 
  defaultContent, 
  type = 'text', 
  section = 'general',
  className = "",
  placeholder,
  multiline = false,
  inline = false,
  children 
}: EditableProps) {
  const { isEditMode } = useGlobalEditMode();
  const { getContent, updateContent } = useEditableContent();
  
  const currentContent = getContent(id, defaultContent);

  const handleSave = (newContent: string) => {
    updateContent(id, newContent, type, section);
  };

  if (!isEditMode) {
    // Modo vista previa - solo mostrar contenido
    if (children) {
      return <>{children(currentContent)}</>;
    }
    
    if (type === 'image' && currentContent) {
      return <img src={currentContent} alt="Content" className={className} />;
    }
    
    // Para textarea y contenido multilínea, usar div; para texto simple, usar span
    if (type === 'textarea' || multiline) {
      return <div className={className}>{currentContent}</div>;
    }
    
    return <span className={className}>{currentContent}</span>;
  }

  // Modo edición - mostrar editor inline
  return (
    <InlineEditor
      content={currentContent}
      type={type}
      onSave={handleSave}
      className={className}
      placeholder={placeholder || `Editar ${type === 'image' ? 'imagen' : 'texto'}...`}
      multiline={multiline}
      inline={inline}
    />
  );
}

// Componente para editar links de redes sociales
interface SocialLinkEditorProps {
  platform: string;
  defaultUrl: string;
  icon: React.ReactNode;
  className?: string;
}

export function SocialLinkEditor({ platform, defaultUrl, icon, className = "" }: SocialLinkEditorProps) {
  const { isEditMode } = useGlobalEditMode();
  const { getContent, updateContent } = useEditableContent();
  
  const currentUrl = getContent(`social_${platform}`, defaultUrl);

  const handleSave = (newUrl: string) => {
    updateContent(`social_${platform}`, newUrl, 'link', 'social');
  };

  if (!isEditMode) {
    return (
      <a 
        href={currentUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={className}
      >
        {icon}
      </a>
    );
  }

  return (
    <div className="relative group">
      <a 
        href={currentUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${className} block`}
      >
        {icon}
      </a>
      
      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <InlineEditor
          content={currentUrl}
          type="link"
          onSave={handleSave}
          placeholder={`URL de ${platform}`}
          className="text-xs"
        />
      </div>
    </div>
  );
}

// Provider del contexto de contenido
export function ContentManagerProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}