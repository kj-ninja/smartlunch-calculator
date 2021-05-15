import pl from '@/locales/pl';
import en from '@/locales/en';
import uk from '@/locales/uk';
import { createI18n } from 'vue-i18n';

const messages: Record<string, any> = {
  pl,
  en,
  uk,
};

const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
