import { Icon } from '@iconify/react';
import classnames from 'classnames';
import { useScrollY } from '~/hooks';
import styles from './SplashHeaderBox.module.scss';

type SplashHeaderBoxProps = {
  className?: string;
};

export function SplashHeaderBox({ className }: SplashHeaderBoxProps) {
  const scrollY = useScrollY();

  const containerScrollSpeed = -0.1;
  const containerTranslation = scrollY * containerScrollSpeed;
  const containerTransform = 'translateY(' + containerTranslation + 'px)';

  return (
    <div className={classnames(styles.container, className)} style={{ transform: containerTransform }}>
      <div className={classnames(styles.box, styles.box_left)}>
        <h2 className={styles.title_left}>
          <Icon icon="bx:party" />
          Hva skjer?
        </h2>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
      </div>
      <div className={classnames(styles.box, styles.box_right)}>
        <h2 className={styles.title_right}>
          <Icon icon="material-symbols:calendar-month-rounded"></Icon>
          Åpningstider
        </h2>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
        <p>10:13 - Some weird event</p>
      </div>
    </div>
  );
}
