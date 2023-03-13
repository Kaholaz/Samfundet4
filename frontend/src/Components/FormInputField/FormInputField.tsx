import classNames from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { Children } from '~/types';
import styles from './FormInputField.module.scss';

type types = 'text' | 'number' | 'email' | 'password' | 'date' | 'image' | 'datetime-local' | 'file';

type FormInputFieldProps = {
  children?: Children;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  type?: types;
  name: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  helpText?: string;
  errors?: Record<string, { message: string }>;
};

export function FormInputField({
  children,
  className,
  labelClassName,
  inputClassName,
  errors,
  name,
  required,
  register,
  helpText,
  type = 'text',
}: FormInputFieldProps) {
  const isError = errors && name in errors;
  const classnames = classNames(styles.input_field, inputClassName, { [styles.errors]: isError });

  return (
    <div className={className}>
      <label className={classNames(styles.label, labelClassName)}>
        {children}
        <input className={classnames} type={type} {...register(name, { required })} />
        {isError && <div className={styles.errors_text}>{errors[name]?.message}</div>}
      </label>
      {helpText && <p className={styles.helpText}>{helpText}</p>}
    </div>
  );
}
