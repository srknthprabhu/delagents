import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { AuthResponse } from "@shared/schema";

interface LoginFormProps {
  onSubmit?: (email: string, password: string, remember: boolean) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string; rememberMe: boolean }) => {
      const response = await apiRequest("POST", "/api/auth/login", credentials);
      return await response.json() as AuthResponse;
    },
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
        setLocation("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    },
    onError: (error: any) => {
      setError(error.message || "An error occurred during login");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (onSubmit) {
      onSubmit(email, password, rememberMe);
    } else {
      loginMutation.mutate({ email, password, rememberMe });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-login">
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm" data-testid="text-error">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

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
        disabled={loginMutation.isPending}
        data-testid="button-login"
      >
        {loginMutation.isPending ? "Signing in..." : "Sign in"}
      </Button>

      <div className="text-center text-xs p-3 bg-muted/50 rounded-lg border border-border">
        <p className="font-medium mb-1">Demo Credentials:</p>
        <p className="text-muted-foreground">Email: demo@deloitte.com</p>
        <p className="text-muted-foreground">Password: demo123</p>
      </div>

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
