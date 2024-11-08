import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Submit from "@/components/buttons/Submit";
import FormInput from "@/components/inputs/FormInput";
import { State, StudyBranch, StudyYear, University } from "@/constants/enums";
import { SignupPayload } from "@/API/auth/types";
import {
  signupDefualts,
  signupSchema,
} from "@/features/Auth/signup/validation";
import { storage } from "@/utils/storage";
import { useNavigate } from "react-router-dom";
import authQueries from "@/API/auth/queries";
import useSnackbar from "@/hooks/useSnackbar";
import PasswordInput from "@/components/inputs/PasswordInput";
import {
  StateNames,
  StudyBranchNames,
  StudyYearNames,
  UniversityhNames,
} from "@/constants/enums-values";
import { queryClient } from "@/context/queryClient";

const SignupForm = () => {
  const navigate = useNavigate();
  const methods = useForm<SignupPayload>({
    defaultValues: signupDefualts,
    resolver: yupResolver(signupSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { errorSnackbar } = useSnackbar();
  const { mutate, isPending } = authQueries.useRegisterQuery();
  const onSubmit = async (body: SignupPayload) => {
    mutate(body, {
      onSuccess: ({ token, id }) => {
        storage.setToken(token);
        storage.setId(id);
        queryClient.clear();
        navigate("/profile/files", { replace: true });
      },
      onError: (err) => errorSnackbar(err),
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row style={{ width: "700px" }}>
          <Col lg={6} sm={12}>
            <FormInput
              name="name"
              register={register}
              errors={errors}
              label="الاسم"
              placeholder="الاسم الكامل"
              containerClass={"mb-3"}
            />
            <FormInput
              name="phone"
              register={register}
              errors={errors}
              label="رقم الموبايل"
              placeholder="رقم الموبايل"
              containerClass={"mb-3"}
            />
            <FormInput
              type="email"
              name="email"
              register={register}
              errors={errors}
              label="البريد"
              placeholder="البريد"
              containerClass={"mb-3"}
            />
            <PasswordInput
              label="كلمة المرور"
              type="password"
              register={register}
              errors={errors}
              name="password"
              placeholder="كلمة المرور"
              containerClass={"mb-3"}
            />
          </Col>
          <Col lg={6} sm={12}>
            <FormInput
              name="year"
              label="السنة الدراسية"
              type="select"
              register={register}
              errors={errors}
              placeholder="السنة الدراسية"
              containerClass={"mb-3"}
            >
              {Object.values(StudyYear)
                .filter((el) => typeof el !== "string")
                .map((year) => (
                  <option key={year} value={year}>
                    {StudyYearNames[year]}
                  </option>
                ))}
            </FormInput>
            <FormInput
              name="section"
              label="الفرع الدراسي"
              type="select"
              register={register}
              errors={errors}
              placeholder="الفرع الدراسي"
              containerClass={"mb-3"}
            >
              {Object.values(StudyBranch)
                .filter((el) => typeof el !== "string")
                .map((branch) => (
                  <option key={branch} value={branch}>
                    {StudyBranchNames[branch]}
                  </option>
                ))}
            </FormInput>
            <FormInput
              name="university"
              label="الجامعة"
              type="select"
              register={register}
              errors={errors}
              placeholder="الجامعة"
              containerClass={"mb-3"}
            >
              {Object.values(University)
                .filter((el) => typeof el !== "string")
                .map((university) => (
                  <option key={university} value={university}>
                    {UniversityhNames[university]}
                  </option>
                ))}
            </FormInput>
            <FormInput
              name="state"
              label="الإقامة"
              type="select"
              register={register}
              errors={errors}
              placeholder="الإقامة"
              containerClass={"mb-3"}
            >
              {Object.values(State)
                .filter((el) => typeof el !== "string")
                .map((state) => (
                  <option key={state} value={state}>
                    {StateNames[state]}
                  </option>
                ))}
            </FormInput>
          </Col>
        </Row>
        <Row className="mb-0 text-center d-grid">
          <Submit isSubmitting={isPending} small>
            إنشاء الحساب
          </Submit>
        </Row>
      </form>
    </>
  );
};

export default SignupForm;
