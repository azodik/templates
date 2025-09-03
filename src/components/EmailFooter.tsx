import { Container, Hr, Link, Section, Text } from '@react-email/components';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { getIntl } from '../i18n';
import { AppInfoOutput } from '../schemas/shared';

export const EmailFooter = (appInfo: AppInfoOutput) => {
  const intl = getIntl(appInfo.language);

  return (
    <>
      <Hr
        style={{
          borderColor: '#e5e7eb',
          margin: '32px 0 24px 0',
          borderWidth: '1px',
        }}
      />

      <Container style={{ padding: '0 24px' }}>
        {/* Social Links */}
        <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
          {appInfo.githubUrl && (
            <Link href={appInfo.githubUrl} style={{ margin: '0 8px', display: 'inline-block' }}>
              <FaGithub size={20} color="#6b7280" />
            </Link>
          )}
          {appInfo.xUrl && (
            <Link href={appInfo.xUrl} style={{ margin: '0 8px', display: 'inline-block' }}>
              <FaXTwitter size={20} color="#6b7280" />
            </Link>
          )}
        </Section>

        {/* Navigation Links */}
        <Section style={{ textAlign: 'center', marginBottom: '16px' }}>
          <Text
            style={{
              color: '#6b7280',
              fontSize: '13px',
              margin: '0',
              lineHeight: '1.5',
            }}
          >
            <Link
              href={appInfo.privacyPolicyUrl || '#'}
              style={{
                color: '#f76a15',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              {intl.formatMessage({ id: 'emailFooter.privacyPolicy' })}
            </Link>
            {' • '}
            <Link
              href={appInfo.supportUrl || '#'}
              style={{
                color: '#f76a15',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              {intl.formatMessage({ id: 'emailFooter.support' })}
            </Link>
            {' • '}
            <Link
              href={appInfo.termsOfServiceUrl || '#'}
              style={{
                color: '#f76a15',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              {intl.formatMessage({ id: 'emailFooter.termsOfService' })}
            </Link>
          </Text>
        </Section>

        {/* Company Info */}
        <Section style={{ textAlign: 'center', marginBottom: '12px' }}>
          <Text
            style={{
              color: '#9ca3af',
              fontSize: '12px',
              margin: '0 0 4px 0',
              lineHeight: '1.4',
            }}
          >
            {intl.formatMessage({ id: 'emailFooter.text' }, { appName: appInfo.name })}
          </Text>
          <Text
            style={{
              color: '#9ca3af',
              fontSize: '12px',
              margin: '0 0 4px 0',
              lineHeight: '1.4',
            }}
          >
            {intl.formatMessage({ id: 'emailFooter.text2' }, { appName: appInfo.name })}
          </Text>
        </Section>

        {/* Address */}
        <Section style={{ textAlign: 'center', marginBottom: '12px' }}>
          <Text
            style={{
              color: '#9ca3af',
              fontSize: '11px',
              margin: '0',
              lineHeight: '1.3',
            }}
          >
            {appInfo.fullAddress || ''}
          </Text>
        </Section>

        {/* Copyright */}
        <Section style={{ textAlign: 'center' }}>
          <Text
            style={{
              color: '#9ca3af',
              fontSize: '11px',
              margin: '0',
              lineHeight: '1.3',
            }}
          >
            © {new Date().getFullYear()} {appInfo.name}. All rights reserved.
          </Text>
        </Section>
      </Container>
    </>
  );
};

export default EmailFooter;
