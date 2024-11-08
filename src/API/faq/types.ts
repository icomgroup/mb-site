import { BackendResponseWithPagination } from "@/types/apis";

export type GetAllFAQs = BackendResponseWithPagination<FAQ>;

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};
