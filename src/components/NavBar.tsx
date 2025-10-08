import { Logo } from "./Logo";

export function NavBar() {
  return (
    <div className="fixed top-0 left-[80px] right-0 z-30 theme-nav-bg theme-border border-b backdrop-blur-sm">
      <div className="px-8 py-4 flex items-center justify-center theme-nav-bg">
        <Logo size="medium" />
      </div>
    </div>
  );
}