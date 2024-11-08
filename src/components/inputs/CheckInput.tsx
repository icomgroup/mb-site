import { FormInputProps } from "@/components/inputs/FormInput";
import { Form } from "react-bootstrap";

// non-textual checkbox and radio controls
const CheckInput = ({
  type,
  label,
  name,
  register,
  errors,
  className,
  refCallback,
  ...otherProps
}: FormInputProps) => {
  return (
    <>
      <Form.Check
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
      />

      {errors && errors[name] && (
        <Form.Control.Feedback type="invalid">
          {errors[name]!["message"]?.toString()}
        </Form.Control.Feedback>
      )}
    </>
  );
};

export default CheckInput;
