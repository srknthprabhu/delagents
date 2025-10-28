interface User {
  email: string;
  password: string;
  name: string;
}

export interface IStorage {
  getUserByEmail(email: string): Promise<User | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
    this.users.set("demo@deloitte.com", {
      email: "demo@deloitte.com",
      password: "demo123",
      name: "Demo User",
    });
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.get(email.toLowerCase());
  }
}

export const storage = new MemStorage();
