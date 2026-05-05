export interface Request {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
}

export interface CreateRequestDto {
  title: string;
  description: string;
}