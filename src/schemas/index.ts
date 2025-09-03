import { AppInfoSchema } from './shared';
import { z } from 'zod';

export const WelcomeEmailPropsSchema = z.object({
  appInfo: AppInfoSchema,
  name: z.string(),
  url: z.url(),
  plan: z.string(),
  region: z.string(),
  nextBillingDate: z.string(),
});

export const VerifyEmailPropsSchema = z.object({
  appInfo: AppInfoSchema,
  name: z.string(),
  url: z.url(),
});

export const LoginAlertEmailPropsSchema = z.object({
  appInfo: AppInfoSchema,
  name: z.string(),
  loginTime: z.string(),
  ipAddress: z.string(),
  userAgent: z.string(),
  url: z.url(),
});

export const ProfileUpdatedEmailPropsSchema = z.object({
  appInfo: AppInfoSchema,
  name: z.string(),
  updateTime: z.string(),
  ipAddress: z.string(),
  userAgent: z.string(),
  url: z.url(),
});

export const PasswordResetEmailPropsSchema = z.object({
  appInfo: AppInfoSchema,
  name: z.string(),
  url: z.url(),
});

export const PasswordChangedEmailPropsSchema = z.object({
  appInfo: AppInfoSchema,
  name: z.string(),
  updateTime: z.string(),
  ipAddress: z.string(),
  userAgent: z.string(),
  url: z.url(),
});

export type WelcomeEmailProps = z.infer<typeof WelcomeEmailPropsSchema>;
export type VerifyEmailProps = z.infer<typeof VerifyEmailPropsSchema>;
export type LoginAlertEmailProps = z.infer<typeof LoginAlertEmailPropsSchema>;
export type ProfileUpdatedEmailProps = z.infer<typeof ProfileUpdatedEmailPropsSchema>;
export type PasswordResetEmailProps = z.infer<typeof PasswordResetEmailPropsSchema>;
export type PasswordChangedEmailProps = z.infer<typeof PasswordChangedEmailPropsSchema>;
