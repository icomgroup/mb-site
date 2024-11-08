import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "@/components/inputs/FormInput";
import Submit from "@/components/buttons/Submit";
import { State, StudyBranch, StudyYear, University } from "@/constants/enums";
import { EditInfoPayload, UserInfo } from "@/API/account/types";
import { editInfoSchema } from "@/features/Profile/home/validation";
import accountQueries from "@/API/account/queries";
import { queryClient } from "@/context/queryClient";
import controllers from "@/constants/controllers";
import useSnackbar from "@/hooks/useSnackbar";
import {
  StateNames,
  StudyBranchNames,
  StudyYearNames,
  UniversityhNames,
} from "@/constants/enums-values";

const EditInfoForm = ({ data }: { data: UserInfo }) => {
  const { mutate, isPending } = accountQueries.useEditInfoMutation();
  const values: EditInfoPayload = {
    name: data.name,
    phone: data.phone,
    year: data.year,
    section: data.section,
    state: data.state,
    university: data.university,
    email: data.email,
  };

  const methods = useForm<EditInfoPayload>({
    defaultValues: values,
    resolver: yupResolver(editInfoSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { errorSnackbar, successSnackbar } = useSnackbar();
  const onSubmit = async (body: EditInfoPayload) => {
    return mutate(body, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [controllers.USER, "info"] });
        successSnackbar("تم تعديل البيانات بنجاح");
      },
      onError: (err) => {
        errorSnackbar(err);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Row>
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
        </Col>
      </Row>
      <Row className="mb-0 text-center d-grid">
        <Submit isSubmitting={isPending} small className="w-fit mt-3">
          تعديل
        </Submit>
      </Row>
    </form>
  );
};

export default EditInfoForm;
