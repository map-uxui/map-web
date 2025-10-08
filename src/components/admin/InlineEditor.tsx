import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Edit3, Check, X, Image, Link, Type } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface InlineEditorProps {
  content: string;
  type?: 'text' | 'textarea' | 'image' | 'link';
  onSave: (newContent: string) => void;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  inline?: boolean;
}

export function InlineEditor({ 
  content, 
  type = 'text', 
  onSave, 
  className = "", 
  placeholder = "Haz clic para editar...",
  multiline = false,
  inline = false
}: InlineEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing) {
      if (multiline || type === 'textarea') {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      } else {
        if (inputRef.current) {
          inputRef.current.focus();
          if (type === 'text' || type === 'link') {
            inputRef.current.select();
          }
        }
      }
    }
  }, [isEditing, type, multiline]);

  const handleSave = () => {
    if (editValue.trim() !== content) {
      onSave(editValue.trim());
      toast.success("Contenido actualizado correctamente");
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(content);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    } else if (e.key === 'Enter' && e.ctrlKey && multiline) {
      handleSave();
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'image':
        return <Image className="w-3 h-3" />;
      case 'link':
        return <Link className="w-3 h-3" />;
      case 'textarea':
        return <Type className="w-3 h-3" />;
      default:
        return <Edit3 className="w-3 h-3" />;
    }
  };

  if (isEditing) {
    const EditContainer = inline ? 'span' : 'div';
    
    return (
      <EditContainer className="relative group">
        <div className={`flex items-center gap-2 ${inline ? 'inline-flex' : ''}`}>
          {multiline || type === 'textarea' ? (
            <Textarea
              ref={textareaRef}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className={`theme-card-bg border theme-border theme-text min-h-[100px] ${className}`}
            />
          ) : (
            <Input
              ref={inputRef}
              type={type === 'image' || type === 'link' ? 'url' : 'text'}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className={`theme-card-bg border theme-border theme-text ${className}`}
            />
          )}
          
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              onClick={handleSave}
              className="w-8 h-8 p-0 bg-green-600 hover:bg-green-700 text-white"
            >
              <Check className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancel}
              className="w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {multiline && !inline && (
          <p className="text-xs theme-text-secondary mt-1">
            Ctrl + Enter para guardar, Escape para cancelar
          </p>
        )}
      </EditContainer>
    );
  }

  const Container = inline ? 'span' : 'div';
  
  return (
    <Container 
      className={`relative group cursor-pointer ${inline ? 'inline-block' : 'inline-block w-full'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsEditing(true)}
    >
      {/* Content */}
      <div className={`${className} transition-all duration-200 ${isHovered ? 'opacity-80' : ''}`}>
        {type === 'image' && content ? (
          <img src={content} alt="Editable content" className="max-w-full h-auto" />
        ) : (
          <span className={!content ? 'text-gray-400 italic' : ''}>
            {content || placeholder}
          </span>
        )}
      </div>
      
      {/* Edit button overlay */}
      <div 
        className={`absolute -top-2 -right-2 transition-all duration-200 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <Button
          size="sm"
          className="w-6 h-6 p-0 bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent-hover)] text-white shadow-lg rounded-full"
        >
          {getIcon()}
        </Button>
      </div>
      
      {/* Hover border */}
      <div 
        className={`absolute inset-0 border-2 border-dashed border-[var(--portfolio-accent)]/30 rounded pointer-events-none transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </Container>
  );
}