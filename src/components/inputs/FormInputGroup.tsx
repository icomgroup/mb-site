import { FormInputProps } from "@/components/inputs/FormInput";
import SelectInput from "@/components/inputs/SelectInput";
import TextualInput from "@/components/inputs/TextualInput";
import { InputGroup } from "react-bootstrap";

// extend textual form-controls with add-ons
const FormInputGroup = ({
  startIcon,
  type,
  name,
  placeholder,
  comp,
  register,
  errors,
  rows,
  className,
  textClassName,
  refCallback,
  children,
  ...otherProps
}: FormInputProps) => {
  return (
    <InputGroup>
      <InputGroup.Text className={textClassName}>{startIcon}</InputGroup.Text>
      {type === "select" ? (
        <SelectInput
          type={type}
          name={name}
          placeholder={placeholder}
          refCallback={refCallback}
          comp={comp}
          errors={errors}
          register={register}
          className={className}
          rows={rows}
          {...otherProps}
        >
          {children}
        </SelectInput>
      ) : (
        <TextualInput
          type={type}
          name={name}
          placeholder={placeholder}
          refCallback={refCallback}
          comp={comp}
          errors={errors}
          register={register}
          className={className}
          rows={rows}
          {...otherProps}
        />
      )}
    </InputGroup>
  );
};

export default FormInputGroup;
