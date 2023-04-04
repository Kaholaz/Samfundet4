import { Icon } from '@iconify/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, SamfundetLogoSpinner } from '~/Components';
import { SamfMarkdown } from '~/Components/SamfMarkdown';
import { Tab, TabBar } from '~/Components/TabBar/TabBar';
import { getInformationPage, postInformationPage, putInformationPage } from '~/api';
import { InformationPageDto } from '~/dto';
import { STATUS } from '~/http_status_codes';
import { KEY } from '~/i18n/constants';
import { ROUTES } from '~/routes';
import styles from './InformationFormAdminPage.module.scss';

export function InformationFormAdminPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const languageTabs: Tab[] = [
    { key: 'nb', label: 'Norsk' },
    { key: 'en', label: 'Engelsk' },
  ];

  // Form data
  const { slugField } = useParams();
  const [showSpinner, setShowSpinner] = useState<boolean>(true);
  const [infoPage, setInfoPage] = useState<Partial<InformationPageDto>>({
    title_nb: 'Ny informasjonsside',
    text_nb: 'Skriv inn tekst på venstre side.',
    title_en: 'New information page',
    text_en: 'Write your text on the left side.',
  });
  const [languageTab, setLanguageTab] = useState<Tab>(languageTabs[0]);

  // Fetch data if edit mode
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (slugField) {
      getInformationPage(slugField)
        .then((data) => {
          setInfoPage(data);
          setShowSpinner(false);
        })
        .catch((data) => {
          // TODO add error pop up message?
          if (data.request.status === STATUS.HTTP_404_NOT_FOUND) {
            navigate(ROUTES.frontend.admin_information);
          }
        });
    } else {
      setShowSpinner(false);
    }
  }, [slugField]);

  // Loading
  if (showSpinner) {
    return (
      <div className={styles.spinner}>
        <SamfundetLogoSpinner />
      </div>
    );
  }

  // Handles changes of text area
  function handleTextAreaChange(field: string) {
    return (e?: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e?.currentTarget.value ?? '';
      setInfoPage({
        ...infoPage,
        [field]: value,
      });
    };
  }

  // Handles changes of slug field/title
  function handleTextFieldChange(field: string) {
    return (e?: ChangeEvent<HTMLInputElement>) => {
      const value = e?.currentTarget.value ?? '';
      setInfoPage({
        ...infoPage,
        [field]: value,
      });
    };
  }

  function handleOnSubmit() {
    if (slugField) {
      // Update page
      putInformationPage(slugField, infoPage);
      navigate(ROUTES.frontend.admin_information);
    } else {
      // Post new page
      const slug = infoPage.slug_field ?? '';
      postInformationPage({
        slug_field: slug,
        ...infoPage,
      })
        .then(() => {
          navigate(ROUTES.frontend.admin_information);
        })
        .catch(() => {
          // TODO error handling
        });
    }
  }

  const disableSubmit = (infoPage.slug_field === undefined || infoPage.slug_field === '') && slugField === undefined;
  const text_field = languageTab.key === 'nb' ? 'text_nb' : 'text_en';
  const text_value = languageTab.key === 'nb' ? infoPage.text_nb : infoPage.text_en;

  const title_field = languageTab.key === 'nb' ? 'title_nb' : 'title_en';
  const title_value = languageTab.key === 'nb' ? infoPage.title_nb : infoPage.title_en;

  return (
    <div className={styles.wrapper}>
      {/* Header tools */}
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          {slugField ? t(KEY.common_edit) : t(KEY.common_create)} {t(KEY.information_page_short)}
        </div>
        <Button
          rounded={true}
          theme="white"
          onClick={() => {
            if (window.confirm(`${t(KEY.admin_information_confirm_cancel)}`)) {
              navigate(ROUTES.frontend.admin_information);
            }
          }}
        >
          <Icon icon="mdi:close" />
        </Button>
      </div>

      {/* Language tab */}
      <div className={styles.tab_container}>
        <TabBar tabs={languageTabs} selected={languageTab} onSetTab={setLanguageTab} compact={true} />
      </div>

      {/* Edit fields */}
      <div className={styles.edit_container}>
        <div className={styles.left_side}>
          <input className={styles.title_input} onChange={handleTextFieldChange(title_field)} value={title_value} />
          <textarea className={styles.text_area} onChange={handleTextAreaChange(text_field)} value={text_value} />
        </div>
        <div className={styles.preview}>
          <SamfMarkdown>{`# ${title_value} \n ${text_value}`}</SamfMarkdown>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        {/* URL preview */}
        <div className={styles.url_preview}>
          samfundet.no/information-pages/
          {slugField && slugField}
          {!slugField && <input placeholder="samf-url" onChange={handleTextFieldChange('slug_field')} />}
        </div>
        {/* Save button */}
        <Button theme="green" rounded={true} onClick={handleOnSubmit} disabled={disableSubmit}>
          <div style={{ padding: '0 1em' }}>{t(KEY.common_save)}</div>
        </Button>
      </div>
    </div>
  );
}
