Quiero que mejores la versión del proyecto a: todo el proyecto que puedas sacar y ordenamiento que puedas sacar de este Figma Make.

Quiero que quede igual. Te paso la información completa del proyecto de portfolio personal que estoy desarrollando en Figma Make y necesito que actualices mi versión actual de Cursor para que coincida exactamente con esta implementación más avanzada.

# Personal Portfolio Website - Complete Figma Make Implementation

## Project Overview
This is a modern personal portfolio website with a sophisticated dark theme design, featuring organic background patterns, cyan/turquoise accent colors (#0aafb8), and a complete icon-based navigation system with React Context API for state management.

## Design System & Visual Identity
- **Primary Color**: #0aafb8 (cyan/turquoise for main elements)
- **Text Color**: #F0F1F5 (light text on dark background)
- **Background**: #1a1625 (dark purple-black)
- **Typography**: Georama font family for section titles with subtle shadow effects
- **Design Style**: Modern, dark theme with organic curved line patterns as background decoration
- **Hover Effects**: Smooth transitions and subtle animations throughout
- **Fully responsive design** with mobile-first approach

## Complete Project Structure
```
├── App.tsx (main entry point with Context providers)
├── Attributions.md
├── components/
│   ├── BottomNavigation.tsx
│   ├── BottomNavigationWithState.tsx
│   ├── ContactSection.tsx
│   ├── HeroSection.tsx
│   ├── HomeSection.tsx
│   ├── Logo.tsx
│   ├── NavBar.tsx
│   ├── SearchPanel.tsx
│   ├── ServicesSection.tsx
│   ├── SideNavigationWithState.tsx
│   ├── TeamSection.tsx
│   ├── WorksSection.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/ (complete shadcn/ui component library)
│       ├── accordion.tsx, alert-dialog.tsx, alert.tsx
│       ├── aspect-ratio.tsx, avatar.tsx, badge.tsx
│       ├── breadcrumb.tsx, button.tsx, calendar.tsx
│       ├── card.tsx, carousel.tsx, chart.tsx
│       ├── checkbox.tsx, collapsible.tsx, command.tsx
│       ├── context-menu.tsx, dialog.tsx, drawer.tsx
│       ├── dropdown-menu.tsx, form.tsx, hover-card.tsx
│       ├── input-otp.tsx, input.tsx, label.tsx
│       ├── menubar.tsx, navigation-menu.tsx, pagination.tsx
│       ├── popover.tsx, progress.tsx, radio-group.tsx
│       ├── resizable.tsx, scroll-area.tsx, select.tsx
│       ├── separator.tsx, sheet.tsx, sidebar.tsx
│       ├── skeleton.tsx, slider.tsx, sonner.tsx
│       ├── switch.tsx, table.tsx, tabs.tsx
│       ├── textarea.tsx, toggle-group.tsx, toggle.tsx
│       ├── tooltip.tsx, use-mobile.ts, utils.ts
├── imports/ (Figma imported assets)
│   ├── Frame10.tsx
│   ├── Frame142.tsx
│   ├── Header-1-1374.tsx
│   ├── Header.tsx
│   ├── svg-m5otznwheq.ts
│   └── svg-w7t3jdjrmc.ts
├── guidelines/
│   └── Guidelines.md
└── styles/
    └── globals.css (Tailwind v4 with complete theme system)
```

## Application Architecture & State Management

### App.tsx Structure
The main entry point implements:
```tsx
// Two main Context providers:
- AnimationContext: { isAnimationPlaying: boolean, toggleAnimation: () => void }
- SearchContext: { 
    isSearchOpen: boolean, 
    toggleSearch: () => void,
    searchQuery: string, 
    setSearchQuery: (query: string) => void,
    searchResults: Array<{ section: string; content: string; match: string }>,
    setSearchResults: (results) => void,
    navigateToSection: (section: string) => void 
  }

// Main state variables:
- activeSection: 'inicio' | 'trabajos' | 'servicios' | 'equipo' | 'contacto'
- isAnimationPlaying: boolean
- isSearchOpen: boolean  
- searchQuery: string
- searchResults: array of search matches
```

### Layout Structure & Element Ordering
```tsx
<div className="min-h-screen">
  {/* 1. Top Navigation Bar */}
  <NavBar />
  
  {/* 2. Search Panel (overlay when active) */}
  <SearchPanel />
  
  {/* 3. Main Content Area with right margin for side nav */}
  <div className="mr-[72px] pt-[72px]">
    {renderSection()} // Dynamic section rendering
  </div>
  
  {/* 4. Fixed Side Navigation (always visible) */}
  <SideNavigationWithState 
    activeSection={activeSection} 
    onSectionChange={setActiveSection} 
  />
</div>
```

### Section Navigation System
- **5 Main Sections**: inicio (home), trabajos (works), servicios (services), equipo (team), contacto (contact)
- **Section Components**: HomeSection, WorksSection, ServicesSection, TeamSection, ContactSection
- **Navigation Method**: Switch statement in renderSection() function
- **State Updates**: setActiveSection updates current view and closes search

### Side Navigation Features
- **Icon-based navigation**: person, briefcase, tools, and phone icons for each section
- **Social Media Links**: Instagram, LinkedIn, Behance positioned above animation controls
- **Animation Controls**: Play/pause toggle for background animations
- **Material Design**: Consistent with Material Design navigation principles
- **Fixed positioning**: Always visible on right side (72px width)

### Search Functionality
- **Global search**: Searches across all sections simultaneously
- **Real-time results**: Updates searchResults state as user types
- **Result navigation**: Click search result navigates to corresponding section
- **Search state management**: Automatically closes and clears when navigating

## Technical Implementation
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 with comprehensive custom CSS variables system
- **State Management**: React Context API with useContext hooks (useAnimation, useSearch)
- **Component Architecture**: Modular design with reusable shadcn/ui components
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with desktop navigation enhancements

## Design Consistency Rules
1. **Section Titles**: All use Georama font with cyan color (#0aafb8) and shadow effects
2. **Card Heights**: Service cards standardized to 320px height with centered text
3. **Spacing**: Consistent 64px margin-bottom (mb-16) between descriptive text and cards
4. **Visual Hierarchy**: Unified typography scale and spacing system
5. **Interactive Elements**: Consistent hover states and transitions

## Complete Tailwind v4 Configuration

### CSS Variables System (styles/globals.css)
```css
:root {
  /* Core theme variables */
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  
  /* UI Component tokens */
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --radius: 0.625rem;
  
  /* Typography weights */
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  
  /* Chart colors */
  --chart-1 through --chart-5: Various oklch color values
  
  /* Sidebar specific tokens */
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-border: oklch(0.922 0 0);
}

.dark {
  /* Dark theme overrides */
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --border: oklch(0.269 0 0);
  --sidebar: oklch(0.205 0 0);
  /* ... complete dark theme token set */
}
```

### Typography System
```css
@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 { font-size: var(--text-2xl); font-weight: var(--font-weight-medium); line-height: 1.5; }
    h2 { font-size: var(--text-xl); font-weight: var(--font-weight-medium); line-height: 1.5; }
    h3 { font-size: var(--text-lg); font-weight: var(--font-weight-medium); line-height: 1.5; }
    h4 { font-size: var(--text-base); font-weight: var(--font-weight-medium); line-height: 1.5; }
    p, input { font-size: var(--text-base); font-weight: var(--font-weight-normal); line-height: 1.5; }
    label, button { font-size: var(--text-base); font-weight: var(--font-weight-medium); line-height: 1.5; }
  }
}
```

### Custom Utilities
```css
/* Horizontal scrolling */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
.scrollbar-hide::-webkit-scrollbar { display: none; }
```

### Theme Integration
- **@theme inline**: Maps all CSS variables to Tailwind color system
- **@custom-variant dark**: Custom dark mode implementation
- **Base layer**: Typography and scrollbar customizations
- **Variable mapping**: Complete integration between CSS variables and Tailwind utilities

## Migration Requirements
1. **Preserve existing functionality**: All current features must work identically
2. **Maintain design fidelity**: Visual appearance should remain exactly the same
3. **Keep component structure**: Existing component architecture should be preserved
4. **Responsive behavior**: Mobile and desktop layouts must function properly
5. **Performance**: Ensure smooth animations and interactions

## Next Development Phase
The portfolio is complete but ready for:
- Content updates and new project additions
- Enhanced animations and micro-interactions
- SEO optimization and performance improvements
- Additional sections or features as needed

## Figma Assets Integration
The `/imports` directory contains Figma-exported components and SVGs:
- **Frame10.tsx, Frame142.tsx**: Layout components from Figma
- **Header.tsx, Header-1-1374.tsx**: Header variations
- **svg-m5otznwheq.ts, svg-w7t3jdjrmc.ts**: SVG icon definitions
- **ImageWithFallback.tsx**: Protected system component for image handling

These assets must be imported exactly as exported from Figma to maintain design fidelity.

## Component Dependencies & Relationships
- **App.tsx**: Main orchestrator with Context providers and section routing
- **SideNavigationWithState**: Consumes both AnimationContext and manages section navigation
- **SearchPanel**: Consumes SearchContext for search functionality
- **NavBar**: Top navigation with search toggle
- **Section Components**: HomeSection, WorksSection, ServicesSection, TeamSection, ContactSection
- **shadcn/ui**: Complete component library for consistent UI elements

## State Flow & Context Usage
```tsx
// Animation Context Usage
const { isAnimationPlaying, toggleAnimation } = useAnimation();

// Search Context Usage  
const { 
  isSearchOpen, 
  toggleSearch, 
  searchQuery, 
  setSearchQuery,
  searchResults, 
  setSearchResults,
  navigateToSection 
} = useSearch();
```

## Critical Implementation Details
1. **Margin Management**: Main content has `mr-[72px] pt-[72px]` to accommodate fixed side navigation
2. **Section Switching**: Uses string-based switch statement with Spanish section names
3. **Search Integration**: Search closes automatically when navigating to sections
4. **Animation State**: Global animation state affects background patterns across all sections
5. **Context Isolation**: Animation and Search contexts are separate for modularity

## Migration Requirements for Cursor
1. **Exact File Structure**: Recreate the complete directory structure including all subdirectories
2. **Context Implementation**: Implement both AnimationContext and SearchContext with exact same interface
3. **State Management**: Maintain all state variables and their exact naming convention
4. **Component Integration**: Ensure all components import and use contexts correctly
5. **Tailwind v4 Setup**: Implement complete globals.css with all CSS variables and theme system
6. **shadcn/ui Library**: Include all 35+ UI components from the components/ui directory
7. **Figma Assets**: Import all Figma components and SVG files from imports directory
8. **Spanish Localization**: Maintain Spanish section names (inicio, trabajos, servicios, equipo, contacto)
9. **Layout Preservation**: Keep exact layout structure with fixed side navigation and content margins
10. **Search Functionality**: Implement complete search system with real-time filtering and navigation

## Dependencies to Install
```json
{
  "react": "^18.x",
  "react-dom": "^18.x", 
  "typescript": "^5.x",
  "@types/react": "^18.x",
  "@types/react-dom": "^18.x",
  "tailwindcss": "^4.x",
  "lucide-react": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest"
}
```

Please create this project in Cursor maintaining 100% design and functionality parity with the current implementation, including all state management, navigation logic, search functionality, and the complete Tailwind v4 theming system.