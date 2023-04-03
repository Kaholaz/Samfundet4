import { useAuthContext } from '~/AuthContext';
import { Carousel, IconButton, ImageCard } from '~/Components';
import { BACKEND_DOMAIN } from '~/constants';
import { EventDto, HomePageElementDto } from '~/dto';
import { reverse } from '~/named-urls';
import { PERM } from '~/permissions';
import { ROUTES } from '~/routes';
import { COLORS } from '~/types';
import { hasPerm } from '~/utils';
import styles from './EventCarousel.module.scss';

type EventCarouselProps = {
  skeletonCount?: number;
  element?: HomePageElementDto;
};

const spacing = 1.5;

export function EventCarousel({ element, skeletonCount = 0 }: EventCarouselProps) {
  const { user } = useAuthContext();
  const isStaff = user?.is_staff;
  const wrapperClass = styles.wrapper;

  if (!element) {
    return (
      <Carousel className={wrapperClass} spacing={spacing}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ImageCard key={i} isSkeleton />
        ))}
      </Carousel>
    );
  }

  return (
    <Carousel className={wrapperClass} header={element.title_nb} spacing={spacing}>
      {element.events.map((event: EventDto) => {
        const url = reverse({ pattern: ROUTES.frontend.event, urlParams: { id: event.id } });
        const editUrl = reverse({ pattern: ROUTES.frontend.admin_events_edit, urlParams: { id: event.id } });
        const detailurl = reverse({
          pattern: ROUTES.backend.admin__samfundet_event_change,
          urlParams: { objectId: event.id },
        });
        const canChangeEvent = hasPerm({ user: user, permission: PERM.SAMFUNDET_CHANGE_EVENT, obj: event.id });

        return (
          <ImageCard
            className={styles.image_card}
            key={event.id}
            title={event.title_en}
            date={event.start_dt}
            imageUrl={BACKEND_DOMAIN + event.image_url}
            url={url}
          >
            <div className={styles.button_bar}>
              {canChangeEvent && <IconButton icon="mdi:pen" url={editUrl} title="Edit" color={COLORS.blue} />}
              {isStaff && canChangeEvent && (
                <IconButton
                  icon="vscode-icons:file-type-django"
                  title="Backend details"
                  target="backend"
                  color={COLORS.white}
                  border="solid green 1px"
                  url={detailurl}
                />
              )}
            </div>
          </ImageCard>
        );
      })}
    </Carousel>
  );
}
