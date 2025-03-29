export interface TeachersInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: "PROFESSOR" | "SUPER_ADMIN" | "SECRETARIA" | "USER";
}