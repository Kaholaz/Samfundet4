import { Icon } from '@iconify/react';
import classNames from 'classnames';
import { Link } from '~/Components';
import { LinkProps } from '~/Components/Link/Link';
import styles from './IconButton.module.scss';

type IconButtonProps = {
  onClick?: () => void;
  url?: string;
  color?: string;
  title: string;
  icon: string;
  className?: string;
  border?: string;
} & Pick<LinkProps, 'target'>;

export function IconButton({ onClick, className, color, icon, title, border, url, target }: IconButtonProps) {
  function handleOnClick(e?: React.MouseEvent<HTMLElement>) {
    e?.preventDefault();
    onClick?.();
  }

  if (url) {
    return (
      <Link
        url={url}
        plain
        title={title}
        target={target}
        className={classNames(styles.icon_button, className)}
        style={{ backgroundColor: color, border: border }}
      >
        <Icon icon={icon} />
      </Link>
    );
  }

  return (
    <button
      onClick={handleOnClick}
      title={title}
      className={classNames(styles.icon_button, className)}
      style={{ backgroundColor: color, border: border }}
    >
      <Icon icon={icon} />
    </button>
  );
}
