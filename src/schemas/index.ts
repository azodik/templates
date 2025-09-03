import { AppInfoSchema } from './shared';
import { z } from 'zod';
const LangSchema = z.enum(['en', 'hi', 'es', 'fr', 'de']).default('en').optional();
export const WelcomeEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    url: z.url(),
    plan: z.string(),
    region: z.string(),
    nextBillingDate: z.string(),
  }),
  lang: LangSchema,
});

export const VerifyEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    url: z.url(),
  }),
  lang: LangSchema,
});

export const LoginAlertEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    url: z.url(),
    loginTime: z.string(),
    ipAddress: z.string(),
    userAgent: z.string(),
  }),
  lang: LangSchema,
});

export const ProfileUpdatedEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    url: z.url(),
    updateTime: z.string(),
    ipAddress: z.string(),
    userAgent: z.string(),
  }),
  lang: LangSchema,
});

export const PasswordResetEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    url: z.url(),
  }),
  lang: LangSchema,
});

export const PasswordChangedEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    url: z.url(),
    updateTime: z.string(),
    ipAddress: z.string(),
    userAgent: z.string(),
  }),
  lang: LangSchema,
});

export const EmailChangedEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    url: z.url(),
    updateTime: z.string(),
    ipAddress: z.string(),
    location: z.string(),
  }),
  lang: LangSchema,
});

export const PhoneChangedEmailPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    updateTime: z.string(),
    ipAddress: z.string(),
    location: z.string(),
    url: z.url(),
  }),

  lang: LangSchema,
});

export const MarketingNewsletterPropsSchema = z.object({
  payload: z.object({
    appInfo: AppInfoSchema,
    name: z.string(),
    userEmail: z.string(),
    newsletterLink: z.string(),
    unsubscribeLink: z.string(),
    managePreferencesLink: z.string(),
  }),
  lang: LangSchema,
});

export type Lang = z.infer<typeof LangSchema>;
export type WelcomeEmailProps = z.infer<typeof WelcomeEmailPropsSchema>;
export type VerifyEmailProps = z.infer<typeof VerifyEmailPropsSchema>;
export type LoginAlertEmailProps = z.infer<typeof LoginAlertEmailPropsSchema>;
export type ProfileUpdatedEmailProps = z.infer<typeof ProfileUpdatedEmailPropsSchema>;
export type PasswordResetEmailProps = z.infer<typeof PasswordResetEmailPropsSchema>;
export type PasswordChangedEmailProps = z.infer<typeof PasswordChangedEmailPropsSchema>;
export type EmailChangedEmailProps = z.infer<typeof EmailChangedEmailPropsSchema>;
export type PhoneChangedEmailProps = z.infer<typeof PhoneChangedEmailPropsSchema>;
export type MarketingNewsletterProps = z.infer<typeof MarketingNewsletterPropsSchema>;
