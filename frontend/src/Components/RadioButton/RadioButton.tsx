import { Children } from '~/types';
import styles from './RadioButton.module.scss';

type RadioButtonProps = {
  name?: string;
  value?: string;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  defaultValue?: string | number;
  defaultChecked?: boolean;
  children?: Children;
  onChange?: () => void;
};

export function RadioButton({
  name,
  value,
  checked,
  onChange,
  disabled,
  defaultValue,
  defaultChecked,
  className,
  children,
}: RadioButtonProps) {
  return (
    <label className={styles.radioButton}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        defaultValue={defaultValue}
        checked={checked}
        disabled={disabled}
        className={className}
      />
      <div className={styles.circle}></div>
      {children}
    </label>
  );
}
