import { ResetPassowrdBody } from "@/API/auth/types";
import yup from "@/libs/yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]\\|])\S{8,}$/;

const passwordValidationMsg =
  "يجب أن تحوي على الأقل على حرف كبير، حرف صغير، حرف خاص، رقم";

const minValidationMsg = "كلمة المرور يجب ان تكون على الاقل 8 حرف";

export const resetPasswordSchema: yup.ObjectSchema<ResetPassowrdBody> =
  yup.object({
    token: yup.string().required(),
    email: yup.string().required(),
    password: yup
      .string()
      .min(8, minValidationMsg)
      .required()
      .matches(passwordRegex, passwordValidationMsg),
    password_confirmation: yup.string().when("password", {
      is: (id: string) => id !== "",
      then: (schema) =>
        schema
          .required()
          .oneOf([yup.ref("password")], "كلمات المرور غير متطابقة!"),
    }),
  });

export const resetPassowrdDefualts = {
  token: "",
  email: "",
  password: "",
  password_confirmation: "",
} as ResetPassowrdBody;
