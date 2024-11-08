import { SignupPayload } from "@/API/auth/types";
import { State, StudyBranch, StudyYear, University } from "@/constants/enums";
import yup from "@/libs/yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]\\|])\S{8,}$/;

const passwordValidationMsg =
  "يجب أن تحوي على الأقل على حرف كبير، حرف صغير، حرف خاص، رقم";

const minValidationMsg = "كلمة المرور يجب ان تكون على الاقل 8 حرف";

export const signupSchema: yup.ObjectSchema<SignupPayload> = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email("يرجى إدخال بريد صالح"),
  phone: yup.string().required(),
  password: yup
    .string()
    .min(8, minValidationMsg)
    .required()
    .matches(passwordRegex, passwordValidationMsg),
  state: yup
    .mixed<State>()
    .oneOf(
      Object.values(State).filter((el) => typeof el !== "string") as State[],
      "يرجى تحديد خيار"
    )
    .transform((el) => +el)
    .required(),
  section: yup
    .mixed<StudyBranch>()
    .oneOf(
      Object.values(StudyBranch).filter(
        (el) => typeof el !== "string"
      ) as StudyBranch[],
      "يرجى تحديد خيار"
    )
    .transform((el) => +el)
    .required(),
  year: yup
    .mixed<StudyYear>()
    .oneOf(
      Object.values(StudyYear).filter(
        (el) => typeof el !== "string"
      ) as StudyYear[],
      "يرجى تحديد خيار"
    )
    .transform((el) => +el)
    .required(),
  university: yup
    .mixed<University>()
    .oneOf(
      Object.values(University).filter(
        (el) => typeof el !== "string"
      ) as University[],
      "يرجى تحديد خيار"
    )
    .transform((el) => +el)
    .required(),
});

export const signupDefualts = {
  name: "",
  email: "",
  password: "",
  phone: "",
  year: StudyYear.SIXTH,
  state: State.ALEPPO,
  section: StudyBranch.MEDICINE,
  university: University.ALEPPO,
} as SignupPayload;
