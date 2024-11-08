import { State, StudyBranch, StudyYear, University } from "@/constants/enums";
import { BackendResponse } from "@/types/apis";

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
  phone: string;
  state: State;
  university: University;
  year: StudyYear;
  section: StudyBranch;
};

export type LoginResult = BackendResponse<{
  user: {
    name: string;
    email: string;
    phone: string;
    state: State;
    university: University;
    year: StudyYear;
    section: StudyBranch;
    id: number;
  };
  token: string;
}>;

export type ResetPassowrdBody = {
  token: string;
  password: string;
  password_confirmation?: string;
  email: string;
};

export type ForgetPasswordBody = {
  email: string;
};
