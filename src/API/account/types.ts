import { Block, File } from "@/API/files/types";
import { State, StudyBranch, StudyYear, University } from "@/constants/enums";
import { BackendResponse, BackendResponseWithPagination } from "@/types/apis";

export type UserInfo = {
  name: string;
  email: string;
  phone: string;
  state: State;
  university: University;
  year: StudyYear;
  section: StudyBranch;
  id: number;
  points: number;
};

export type EditInfoPayload = Omit<UserInfo, "id" | "points">;

export type GetMyFiles = BackendResponseWithPagination<File>;

export type GetMyCategories = BackendResponse<Block[]>;
