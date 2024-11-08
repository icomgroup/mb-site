import { FormInputProps } from "@/components/inputs/FormInput";
import { Form } from "react-bootstrap";

const SelectInput = ({
  type,
  label,
  name,
  register,
  errors,
  className,
  refCallback,
  children,
  ...otherProps
}: FormInputProps) => {
  return (
    <>
      <Form.Select
        type={type}
        label={label}
        name={name}
        id={name}
        ref={(r: HTMLInputElement) => {
          if (refCallback) refCallback(r);
        }}
        className={className}
        isInvalid={errors && errors[name] ? true : false}
        {...(register ? register(name) : {})}
        {...otherProps}
      >
        {children}
      </Form.Select>

      {errors && errors[name] && (
        <Form.Control.Feedback type="invalid">
          {errors[name]!["message"]?.toString()}
        </Form.Control.Feedback>
      )}
    </>
  );
};

export default SelectInput;
