import { BackendResponseWithPagination } from "@/types/apis";

export type TeamMember = {
  id: number;
  img: string;
  name: string;
  title: string;
  description: string;
};

export type GetAllTeam = BackendResponseWithPagination<TeamMember>;
