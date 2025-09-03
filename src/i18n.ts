import { createIntl, createIntlCache } from '@formatjs/intl';
import en from './locales/en.json';
import hi from './locales/hi.json';

const cache = createIntlCache();

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function flattenMessages(nestedMessages: unknown, prefix = ''): Record<string, string> {
  if (!isRecord(nestedMessages)) return {};

  return Object.keys(nestedMessages).reduce<Record<string, string>>((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else if (isRecord(value)) {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
}

const LOCALES: Record<string, unknown> = {
  en,
  hi,
};

function loadMessages(lang: string) {
  const selected = LOCALES[lang] ?? LOCALES.en;
  return flattenMessages(selected);
}

export function getIntl(lang: string = 'en') {
  const messages = loadMessages(lang);
  return createIntl(
    {
      locale: lang,
      messages,
    },
    cache,
  );
}
