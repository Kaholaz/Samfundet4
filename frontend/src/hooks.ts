import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getTextItem } from '~/api';
import { desktopBpLower, mobileBpUpper } from './constants';
import { TextItemDto } from './dto';
import { LANGUAGES } from './i18n/constants';

// Make typescript happy.
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    goatcounter: any;
  }
}

/**
 * Hook to track all url changes.
 * https://tebza.dev/how-to-add-privacy-friendly-analytics-to-nextts
 */
export function useGoatCounter(): void {
  const location = useLocation();

  useEffect(() => {
    if (window.goatcounter === undefined) return;
    const path = location.pathname + location.search + location.hash;
    window.goatcounter.count({ path: path });
    console.log(`GoatCounter tracked path: ${path}`);
  }, [location]);
}

/**
 * Return true while on desktop width, false otherwise
 */
export function useDesktop(): boolean {
  const [width, setWidth] = useState(window.innerWidth);
  const updateMedia = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  return width > desktopBpLower;
}

/**
 * @returns true if mobile, false otherwise
 */
export function useMobile(): boolean {
  const [width, setWidth] = useState(window.innerWidth);
  const updateMedia = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  return width < mobileBpUpper;
}

/**
 *  Hook that returns the correct translation for given key
 */
export function useTextItem(key: string, language?: string): string | undefined {
  const [textItem, setTextItem] = useState<TextItemDto>();
  const { i18n } = useTranslation();
  const isNorwegian = (language || i18n.language) === LANGUAGES.NB;
  useEffect(() => {
    getTextItem(key).then((data) => {
      setTextItem(data);
    });
  }, [key]);
  return isNorwegian ? textItem?.text_nb : textItem?.text_en;
}

/**
 *
 * @returns the current scrollY position
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    function handleNavigation(e: Event) {
      const target = e.currentTarget as Window;
      if (target != null) {
        setScrollY(window.scrollY);
      }
    }
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, []);
  return scrollY;
}

// Element offset from screen center (id of html element)
export function useScreenCenterOffset(id: string): number {
  const element = document.getElementById(id);
  const rect = element?.getBoundingClientRect();
  const [positionY, setPositionY] = useState(rect?.y ?? 0);

  useEffect(() => {
    function handleNavigation(e: Event) {
      const target = e.currentTarget;
      if (target != null) {
        const element = document.getElementById(id);
        const rect = element?.getBoundingClientRect();
        if (rect != null) {
          const centerScreen = window.innerHeight / 2;
          const centerEl = rect.y + rect.height / 2;
          setPositionY(centerEl - centerScreen);
        }
      }
    }
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [id]);
  return positionY;
}
