export interface Request {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  user?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface CreateRequestDto {
  title: string;
  description: string;
}