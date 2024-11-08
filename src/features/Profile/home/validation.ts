import { EditInfoPayload } from "@/API/account/types";
import { State, StudyBranch, StudyYear, University } from "@/constants/enums";
import yup from "@/libs/yup";

export const mobileNumberRegex = /(^((09[3|4|5|6|7|8|9][0-9]{7}))$)|(^$)/;

export const editInfoSchema: yup.ObjectSchema<EditInfoPayload> = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(mobileNumberRegex, "يرجى إدخال رقم موبايل صحيح"),
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
