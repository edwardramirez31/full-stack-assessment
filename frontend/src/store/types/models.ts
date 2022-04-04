export interface ErrorObject {
  message: string;
  status?: number;
  code?: string;
}

export interface Question {
  id: number;
  title: string;
  text: string;
}
