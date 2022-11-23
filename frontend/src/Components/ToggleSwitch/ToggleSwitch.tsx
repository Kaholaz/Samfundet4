import { ReactNode } from 'react';
import styles from './ToggleSwitch.module.scss';

type ToggleSwitchProps = {
  className?: string;
  checked?: boolean;
  offIcon?: ReactNode;
  onIcon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export function ToggleSwitch({ className, checked, onClick, disabled, offIcon, onIcon }: ToggleSwitchProps) {
  return (
    <div className={className}>
      <label className={styles.label}>
        <input
          className={styles.toggle_switch}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onClick={onClick}
        />
        <span className={styles.off_icon}>{offIcon}</span>
        <span className={styles.on_icon}>{onIcon}</span>
        <span className={styles.ball} />
      </label>
    </div>
  );
}
