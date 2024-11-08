import React, { InputHTMLAttributes, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FieldErrors } from "react-hook-form";
import EyeIcon from "@/assets/images/EyeIcon";
import EyeSlashIcon from "@/assets/images/EyeSlashIcon";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  label?: string;
  type?: string;
  name: string;
  comp?: string;
  placeholder?: string;
  register?: any;
  errors?: FieldErrors;
  error?: string;
  className?: string;
  labelClassName?: string;
  containerClass?: string;
  textClassName?: string;
  refCallback?: any;
  action?: React.ReactNode;
  children?: React.ReactNode;
  rows?: string | number;
}

const PasswordInput = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  error,
  className,
  labelClassName,
  containerClass,
  refCallback,
  action,
  rows,
  ...otherProps
}: PasswordInputProps) => {
  const [isTextType, setIsTextType] = useState(false);
  return (
    <>
      {label && (
        <>
          <Form.Label className={labelClassName}>{label}</Form.Label>
          {action && action}
        </>
      )}
      <InputGroup className={`${containerClass} password-input`}>
        <Form.Control
          type={isTextType ? "text" : type}
          placeholder={placeholder}
          name={name}
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
        <Button
          onClick={() => setIsTextType((prev) => !prev)}
          variant="outline-secondary"
          id="button-addon1"
        >
          {!isTextType && <EyeIcon />}
          {isTextType && <EyeSlashIcon />}
        </Button>

        {((errors && errors[name]) || (error && error.length === 0)) && (
          <Form.Control.Feedback type="invalid" className="d-block">
            {errors ? errors[name]?.message?.toString() : ""}
            {error ? error : ""}
          </Form.Control.Feedback>
        )}
      </InputGroup>
    </>
  );
};

export default PasswordInput;
