import { Shield } from "lucide-react";
import LoginForm from "@/components/LoginForm";
import deloitteLogo from "@assets/generated_images/Deloitte_professional_logo_design_496c247a.png";
import techBackground from "@assets/generated_images/Corporate_tech_background_pattern_4f458d68.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-20 bg-background">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Logo and Header */}
          <div className="space-y-2">
            <img
              src={deloitteLogo}
              alt="Deloitte"
              className="h-10 mb-6"
              data-testid="img-logo"
            />
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Welcome back
            </h1>
            <p className="text-base text-muted-foreground">
              Sign in to access the Deloitte Tech Portal
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4">
            <Shield className="h-3.5 w-3.5" />
            <span>Secure SSL encrypted connection</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Brand Content (Desktop Only) */}
      <div className="hidden md:flex flex-1 relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={techBackground}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-20 text-primary-foreground">
          <div className="max-w-lg space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold leading-tight">
                Advanced LLM-Powered Agentic Workflows
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Harness the power of state-of-the-art Large Language Models orchestrated through intelligent agentic workflows that autonomously plan, execute, and optimize complex business processes with human-level reasoning.
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
                <p className="text-sm text-primary-foreground/90">
                  Multi-model LLM orchestration with GPT-4, Claude, and custom enterprise models
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
                <p className="text-sm text-primary-foreground/90">
                  Self-directed agents that decompose tasks, execute workflows, and self-correct
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
                <p className="text-sm text-primary-foreground/90">
                  Context-aware reasoning with retrieval-augmented generation and memory systems
                </p>
              </div>
            </div>

            {/* Quote/Tagline */}
            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-sm italic text-primary-foreground/80">
                "Transforming enterprises through intelligent LLM agents that think, plan, and act"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
