import { Link } from 'react-router-dom';
import { Button, TimeDisplay } from '~/Components';
import { TimeDuration } from '~/Components/TimeDuration';
import { EventDto } from '~/dto';
import { ROUTES } from '~/routes';
import styles from './EventsList.module.scss';

type EventsListProps = {
  events: unknown;
};

export function EventsList({ events }: EventsListProps) {
  /** check if dates are equal */
  return (
    <div className={styles.container}>
      {Object.keys(events).map(function (date_str: string, key: number) {
        return (
          <div key={key} className={styles.dates_container}>
            <div className={styles.dateHeader}>
              <TimeDisplay className={styles.dateHeaderText} timestamp={date_str} displayType="nice-date" />
            </div>
            <div className={styles.events_container}>
              {events[date_str].map(function (event: EventDto, key: number) {
                return (
                  <div key={key} className={styles.event_row}>
                    <div className={styles.column_title}>
                      <Link to={ROUTES.frontend.events + event.id} className={styles.link}>
                        {event.title_no}
                      </Link>
                    </div>
                    <div className={styles.column_area_time}>
                      <div className={styles.time_wrapper}>
                        <TimeDuration start={event.start_dt} end={event.end_dt} />
                      </div>
                      <p>{event?.location}</p>
                    </div>
                    <div className={styles.column_price}>
                      <p>{event?.price_group}</p>
                    </div>
                    <div className={styles.column_buy}>
                      <Button theme="samf">Kjøp</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * {date_list.map((date_str: string, index: number) => {
        const date: Date = new Date(date_str);
        const month: string = date.toLocaleDateString('no', { month: 'long' });
        const weekday: string = date.toLocaleDateString('no', { weekday: 'long' });
        const monthday: number = date.getDate();

        return (
          <div key={index} className={styles.dates_container}>
            <h2 className={styles.date_header}>{weekday + ' ' + monthday + '.' + month}</h2>
            {event_list.map((event: Event, index: number) => {
              if (compareDates(event.start_dt, date_str)) {
                return (
                  <div className={styles.events_container} key={index}>
                    <div className={styles.event_row}>
                      <div className={styles.column_title}>
                        <Link to={'/events/' + event.id}>
                          <p> {event.title_no}</p>
                        </Link>
                      </div>
                      <div className={styles.column_area_time}>
                        <div className={styles.time_wrapper}>
                          <p>{`${getTimeStr(event?.start_dt)} - ${getTimeStr(event?.end_dt)}`}</p>
                        </div>
                        <p> {event?.location}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
 */
