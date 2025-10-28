import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

export type LoginRequest = z.infer<typeof loginSchema>;

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: {
    email: string;
    name: string;
  };
}
