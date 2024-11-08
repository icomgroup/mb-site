import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: () => "الحقل مطلوب",
  },
});
export default yup;
