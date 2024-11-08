import { FormInputProps } from "@/components/inputs/FormInput";
import { Form } from "react-bootstrap";

// textual form-controls—like inputs, passwords, textareas etc.
const TextualInput = ({
  type,
  name,
  placeholder,
  register,
  errors,
  error,
  comp,
  rows,
  className,
  refCallback,
  ...otherProps
}: FormInputProps) => {
  return (
    <>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        as={comp}
        id={name}
        ref={(r: HTMLInputElement) => {
          if (refCallback) refCallback(r);
        }}
        className={className}
        isInvalid={
          (errors && errors[name]) || (error && error.length === 0)
            ? true
            : false
        }
        {...(register ? register(name) : {})}
        rows={rows}
        {...otherProps}
      ></Form.Control>

      {((errors && errors[name]) || (error && error.length === 0)) && (
        <Form.Control.Feedback type="invalid" className="d-block">
          {errors ? errors[name]?.message?.toString() : ""}
          {error ? error : ""}
        </Form.Control.Feedback>
      )}
    </>
  );
};

export default TextualInput;
