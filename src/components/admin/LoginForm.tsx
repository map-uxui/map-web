import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !password.trim()) {
      toast.error("Por favor, completa todos los campos");
      return;
    }

    setIsLoading(true);
    
    // Simular autenticación - en producción usar autenticación real
    setTimeout(() => {
      if (email === "map.uxui@gmail.com" && password === "Admin12") {
        toast.success("¡Bienvenido al Dashboard de MAP Design!");
        onLogin(email, password);
      } else {
        toast.error("Credenciales incorrectas");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen theme-bg flex items-center justify-center p-4">
      {/* Background pattern similar to portfolio */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: 'var(--portfolio-accent)',
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Card className="w-full max-w-md theme-card-bg border theme-border backdrop-blur-sm relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-[var(--portfolio-accent)]/10 flex items-center justify-center">
            <Lock className="w-8 h-8 theme-accent" />
          </div>
          <div>
            <CardTitle className="theme-text text-2xl">MAP Design Admin</CardTitle>
            <p className="theme-text-secondary text-sm mt-2">
              Accede al panel de administración
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="theme-text flex items-center gap-2">
                <User className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="theme-card-bg border theme-border theme-text"
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="theme-text flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="theme-card-bg border theme-border theme-text pr-10"
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 theme-text-secondary" />
                  ) : (
                    <Eye className="w-4 h-4 theme-text-secondary" />
                  )}
                </Button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full theme-accent-bg hover:bg-[var(--portfolio-accent-hover)] text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verificando...
                </div>
              ) : (
                "Iniciar Sesión"
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-4 theme-card-bg rounded-lg border theme-border">
            <p className="theme-text-secondary text-xs mb-2">Credenciales de acceso:</p>
            <p className="theme-text text-sm">
              <strong>Email:</strong> map.uxui@gmail.com<br />
              <strong>Contraseña:</strong> Admin12
            </p>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}