import { render } from '@react-email/components';
import { GetTemplate, EmailTemplate, TemplateLanguage } from '@azodik/schemas';
import { WelcomeEmail } from './templates/welcome';
import { PasswordResetEmail } from './templates/password-reset';
import { VerifyEmail } from './templates/verify-email';
import { getIntl } from './i18n';
import { ProfileUpdatedEmail } from './templates/profile-updated';
import { LoginAlertEmail } from './templates/login-alert';
import { PasswordChangedEmail } from './templates/password-changed';
import { EmailChangedEmail } from './templates/email-changed';
import { PhoneChangedEmail } from './templates/phone-changed';

export const getSubject = (template: EmailTemplate, lang: TemplateLanguage) => {
  const intl = getIntl(lang);
  switch (template) {
    case 'welcome':
      return intl.formatMessage({ id: 'welcome.subject' });
    case 'reset-password':
      return intl.formatMessage({ id: 'passwordReset.subject' });
    case 'password-changed':
      return intl.formatMessage({ id: 'passwordChanged.subject' });
    case 'verify-email':
      return intl.formatMessage({ id: 'verifyEmail.subject' });
    case 'profile-updated':
      return intl.formatMessage({ id: 'profileUpdated.subject' });
    case 'email-changed':
      return intl.formatMessage({ id: 'emailChanged.subject' });
    case 'phone-changed':
      return intl.formatMessage({ id: 'phoneChanged.subject' });
    case 'login-alert':
      return intl.formatMessage({ id: 'loginAlert.subject' });
    default:
      return template;
  }
};

export const getTemplate = async (opts: GetTemplate) => {
  const { template, variables, lang, appInfo } = opts;

  // Transform appInfo to include fullAddress
  const transformedAppInfo = {
    ...appInfo,
    fullAddress: [appInfo.address, appInfo.city, appInfo.state, appInfo.zip, appInfo.country]
      .filter(Boolean)
      .join(', '),
  };

  switch (template) {
    case 'welcome':
      return await render(
        WelcomeEmail({
          name: variables?.name || 'John Doe',
          url: variables?.url,
          appInfo: transformedAppInfo,
          plan: variables?.plan,
          region: variables?.region,
          nextBillingDate: variables?.nextBillingDate,
        }),
      );
    case 'reset-password':
      return await render(
        PasswordResetEmail({
          name: variables?.name,
          url: variables?.url,
          appInfo: transformedAppInfo,
        }),
      );
    case 'password-changed':
      return await render(
        PasswordChangedEmail({
          name: variables?.name,
          url: variables?.url,
          appInfo: transformedAppInfo,
          updateTime: variables?.updateTime,
          ipAddress: variables?.ipAddress,
          userAgent: variables?.userAgent,
        }),
      );
    case 'verify-email':
      return await render(
        VerifyEmail({
          name: variables?.name,
          url: variables?.url,
          appInfo: transformedAppInfo,
        }),
      );

    case 'profile-updated':
      return await render(
        ProfileUpdatedEmail({
          name: variables?.name,
          url: variables?.url,
          appInfo: transformedAppInfo,
          updateTime: variables?.updateTime,
          ipAddress: variables?.ipAddress,
          userAgent: variables?.userAgent,
        }),
      );
    case 'login-alert':
      return await render(
        LoginAlertEmail({
          name: variables?.name,
          url: variables?.url,
          appInfo: transformedAppInfo,
          loginTime: variables?.loginTime,
          ipAddress: variables?.ipAddress,
          userAgent: variables?.userAgent,
        }),
      );

    case 'email-changed':
      return await render(
        EmailChangedEmail({
          name: variables?.name,
          lang: lang,
          oldEmail: variables?.oldEmail,
          newEmail: variables?.newEmail,
          changeTime: variables?.changeTime,
          ipAddress: variables?.ipAddress,
          location: variables?.location,
          accountSettingsUrl: variables?.accountSettingsUrl,
        }),
      );

    case 'phone-changed':
      return await render(
        PhoneChangedEmail({
          name: variables?.name,
          lang: lang,
          oldPhone: variables?.oldPhone,
          newPhone: variables?.newPhone,
          changeTime: variables?.changeTime,
          ipAddress: variables?.ipAddress,
          location: variables?.location,
          accountSettingsUrl: variables?.accountSettingsUrl,
        }),
      );

    default:
      throw new Error(`Template ${template} not supported.`);
  }
};
