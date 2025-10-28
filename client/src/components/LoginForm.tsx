import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginFormProps {
  onSubmit?: (email: string, password: string, remember: boolean) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (onSubmit) {
      onSubmit(email, password, rememberMe);
    } else {
      console.log("Login submitted:", { email, password, rememberMe });
    }
    
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-login">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="you@deloitte.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12"
            required
            data-testid="input-email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 h-12"
            required
            data-testid="input-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-toggle-password"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        <div className="flex justify-end">
          <a
            href="#forgot"
            className="text-sm font-medium text-primary hover:underline"
            data-testid="link-forgot-password"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember"
          checked={rememberMe}
          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          data-testid="checkbox-remember"
        />
        <Label
          htmlFor="remember"
          className="text-sm font-normal cursor-pointer"
        >
          Remember me for 30 days
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base font-medium"
        disabled={isLoading}
        data-testid="button-login"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        Need help logging in?{" "}
        <a
          href="#support"
          className="font-medium text-primary hover:underline"
          data-testid="link-support"
        >
          Contact support
        </a>
      </div>
    </form>
  );
}
