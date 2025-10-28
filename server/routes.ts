import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { loginSchema, type AuthResponse } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password, rememberMe } = loginSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(email);
      
      if (!user || user.password !== password) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        } as AuthResponse);
      }

      if (req.session) {
        req.session.user = {
          email: user.email,
          name: user.name,
        };
        
        if (rememberMe) {
          req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
        }
      }

      res.json({
        success: true,
        user: {
          email: user.email,
          name: user.name,
        },
      } as AuthResponse);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Invalid request",
      } as AuthResponse);
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session?.destroy(() => {
      res.json({ success: true });
    });
  });

  app.get("/api/auth/me", (req, res) => {
    if (req.session?.user) {
      res.json({
        success: true,
        user: req.session.user,
      } as AuthResponse);
    } else {
      res.status(401).json({
        success: false,
        message: "Not authenticated",
      } as AuthResponse);
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
