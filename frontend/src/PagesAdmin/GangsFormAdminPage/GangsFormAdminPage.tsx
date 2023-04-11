import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Page, SamfundetLogoSpinner } from '~/Components';
import { SamfForm } from '~/Forms/SamfForm';
import { SamfFormField } from '~/Forms/SamfFormField';
import { getGang } from '~/api';
import { GangDto } from '~/dto';
import { STATUS } from '~/http_status_codes';
import { KEY } from '~/i18n/constants';
import { ROUTES } from '~/routes';
import styles from './GangsFormAdminPage.module.scss';

export function GangsFormAdminPage() {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState<boolean>(true);
  const { t } = useTranslation();

  // If form has a id, check if it exists, and then load that item.
  const { id } = useParams();
  const [gang, setGang] = useState<Partial<GangDto>>({});

  //TODO add permissions on render

  useEffect(() => {
    if (id) {
      getGang(id)
        .then((gang) => {
          setGang(gang);
          setShowSpinner(false);
        })
        .catch((data) => {
          if (data.request.status === STATUS.HTTP_404_NOT_FOUND) {
            navigate(ROUTES.frontend.admin_gangs);
          }
          toast.error(t(KEY.common_something_went_wrong));
        });
    } else {
      setShowSpinner(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function handleOnSubmit(data: GangDto) {
    if (id) {
      // TODO patch
    } else {
      // TODO post
    }
    alert('TODO');
    console.log(JSON.stringify(data));
  }

  if (showSpinner) {
    return (
      <div className={styles.spinner}>
        <SamfundetLogoSpinner />
      </div>
    );
  }

  const submitText = id ? t(KEY.common_save) : `${t(KEY.common_create)} ${t(KEY.common_gang)}`;

  return (
    <Page>
      <h1 className={styles.header}>
        {id ? t(KEY.common_edit) : t(KEY.common_create)} {t(KEY.common_gang)}
      </h1>
      <SamfForm
        initialData={gang}
        onSubmit={handleOnSubmit}
        submitText={submitText}
        validateOnInit={id !== undefined}
        devMode={false}
      >
        <div className={styles.row}>
          <SamfFormField field="name_nb" type="text" label={`${t(KEY.common_norwegian)} ${t(KEY.common_name)}`} />
          <SamfFormField field="name_en" type="text" label={`${t(KEY.common_english)} ${t(KEY.common_name)}`} />
        </div>
        <div className={styles.row}>
          <SamfFormField field="abbreviation" type="text" label={`${t(KEY.admin_gangsadminpage_abbreviation)}`} />
          <SamfFormField field="webpage" type="text" label={`${t(KEY.admin_gangsadminpage_webpage)}`} />
        </div>
        {/* TODO fetch options */}
        {/* <SamfFormField field="gang_type" type="options" label={`${t(KEY.webpage)}`} /> */}
        {/* <SamfFormField field="info_page" type="options" label={`${t(KEY.information_page)}`} /> */}
      </SamfForm>
    </Page>
  );
}
