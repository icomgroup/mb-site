import CheckInput from "@/components/inputs/CheckInput";
import FormInputGroup from "@/components/inputs/FormInputGroup";
import SelectInput from "@/components/inputs/SelectInput";
import TextualInput from "@/components/inputs/TextualInput";
import React, { InputHTMLAttributes } from "react";
import { Form } from "react-bootstrap";

import { FieldErrors } from "react-hook-form";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
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

const FormInput = ({
  startIcon,
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  className,
  labelClassName,
  containerClass,
  textClassName,
  refCallback,
  action,
  rows,
  children,
  ...otherProps
}: FormInputProps) => {
  // handle input type
  const comp =
    type === "textarea" ? "textarea" : type === "select" ? "select" : "input";

  return (
    <>
      {type === "hidden" ? (
        <input
          type={type}
          name={name}
          {...(register ? register(name) : {})}
          {...otherProps}
        />
      ) : (
        <>
          {type === "checkbox" || type === "radio" ? (
            <Form.Group className={containerClass}>
              <CheckInput
                type={type}
                label={label}
                name={name}
                placeholder={placeholder}
                refCallback={refCallback}
                errors={errors}
                register={register}
                comp={comp}
                className={className}
                rows={rows}
                {...otherProps}
              />
            </Form.Group>
          ) : type === "select" ? (
            <Form.Group className={containerClass}>
              {label && (
                <>
                  <Form.Label className={labelClassName}>{label}</Form.Label>
                  {action && action}
                </>
              )}
              {startIcon ? (
                <FormInputGroup
                  type={type}
                  startIcon={startIcon}
                  name={name}
                  comp={comp}
                  textClassName={textClassName}
                  placeholder={placeholder}
                  refCallback={refCallback}
                  errors={errors}
                  register={register}
                  className={className}
                  rows={rows}
                  {...otherProps}
                />
              ) : (
                <SelectInput
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  refCallback={refCallback}
                  errors={errors}
                  register={register}
                  comp={comp}
                  className={className}
                  rows={rows}
                  {...otherProps}
                >
                  {children}
                </SelectInput>
              )}
            </Form.Group>
          ) : (
            <Form.Group className={containerClass}>
              {label && (
                <>
                  <Form.Label className={labelClassName}>{label}</Form.Label>
                  {action && action}
                </>
              )}
              {startIcon ? (
                <FormInputGroup
                  type={type}
                  startIcon={startIcon}
                  name={name}
                  comp={comp}
                  textClassName={textClassName}
                  placeholder={placeholder}
                  refCallback={refCallback}
                  errors={errors}
                  register={register}
                  className={className}
                  rows={rows}
                  {...otherProps}
                />
              ) : (
                <TextualInput
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  refCallback={refCallback}
                  errors={errors}
                  register={register}
                  comp={comp}
                  className={className}
                  rows={rows}
                  {...otherProps}
                />
              )}
            </Form.Group>
          )}
        </>
      )}
    </>
  );
};

export default FormInput;
