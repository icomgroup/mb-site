import { LoginPayload } from "@/API/auth/types";
import yup from "@/libs/yup";

export const loginSchema: yup.ObjectSchema<LoginPayload> = yup.object({
  email: yup.string().required().email("يرجى إدخال بريد صالح"),
  password: yup.string().required(),
});

export const loginDefaults: LoginPayload = {
  email: "",
  password: "",
};
