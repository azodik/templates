import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from '@react-email/components';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { EmailButton } from '../components/EmailButton';
import { getIntl } from '../i18n';
import { LoginAlertEmailProps } from '../schemas';

export const LoginAlertEmail = (props: LoginAlertEmailProps) => {
  const { appInfo, name, loginTime, ipAddress, userAgent } = props.payload || {};
  const intl = getIntl(props.lang || 'en');

  return (
    <Html lang={props.lang || 'en'}>
      <Head />
      <Preview>
        {intl.formatMessage({ id: 'loginAlert.preview' }, { appName: appInfo?.name })}
      </Preview>
      <Body
        style={{
          backgroundColor: '#ffffff',
          fontFamily: 'Arial, sans-serif',
          margin: '0',
          padding: '0',
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '32px 20px',
            backgroundColor: '#ffffff',
          }}
        >
          <EmailHeader logo={appInfo?.logo} appName={appInfo?.name} />

          <Section style={{ textAlign: 'center', marginBottom: '28px' }}>
            <Heading
              style={{
                color: '#1a1a1a',
                fontSize: '24px',
                fontWeight: '600',
                margin: '0 0 12px 0',
                textAlign: 'center',
              }}
            >
              {intl.formatMessage({ id: 'loginAlert.title' }, { appName: appInfo?.name })}
            </Heading>
            <Text
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0',
              }}
            >
              {intl.formatMessage({ id: 'loginAlert.subtitle' }, { appName: appInfo?.name })}
            </Text>
          </Section>

          <Section style={{ marginBottom: '28px' }}>
            <Text
              style={{
                color: '#1a1a1a',
                fontSize: '16px',
                fontWeight: '500',
                margin: '0 0 12px 0',
              }}
            >
              {intl.formatMessage({ id: 'loginAlert.greeting' }, { name })}
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              {intl.formatMessage({ id: 'loginAlert.body' }, { appName: appInfo?.name })}
            </Text>

            {/* Login Details Table */}
            <Section
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
              }}
            >
              <Text
                style={{
                  color: '#374151',
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: '0 0 16px 0',
                }}
              >
                {intl.formatMessage({ id: 'loginAlert.detailsTitle' })}
              </Text>

              <Section style={{ marginBottom: '12px' }}>
                <Text
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#6b7280',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'loginAlert.loginTime' })}
                </Text>
                <Text
                  style={{
                    fontSize: '13px',
                    color: '#374151',
                    margin: '0 0 12px 0',
                  }}
                >
                  {loginTime}
                </Text>
              </Section>

              <Section style={{ marginBottom: '12px' }}>
                <Text
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#6b7280',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'loginAlert.ipAddress' })}
                </Text>
                <Text
                  style={{
                    fontSize: '13px',
                    color: '#374151',
                    margin: '0 0 12px 0',
                  }}
                >
                  {ipAddress}
                </Text>
              </Section>

              <Section style={{ marginBottom: '12px' }}>
                <Text
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#6b7280',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'loginAlert.userAgent' })}
                </Text>
                <Text
                  style={{
                    fontSize: '13px',
                    color: '#374151',
                    margin: '0 0 12px 0',
                  }}
                >
                  {userAgent}
                </Text>
              </Section>
            </Section>

            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              {intl.formatMessage({ id: 'loginAlert.securityNotice' })}
            </Text>
          </Section>

          <Section style={{ textAlign: 'center', marginBottom: '28px' }}>
            <EmailButton
              title={intl.formatMessage({ id: 'loginAlert.buttonText' })}
              link={appInfo?.supportUrl || '#'}
              variant="primary"
              size="medium"
            />
          </Section>

          <Section style={{ marginBottom: '20px' }}>
            <Text
              style={{
                color: '#888888',
                fontSize: '11px',
                lineHeight: '1.3',
                margin: '0',
              }}
            >
              {intl.formatMessage({ id: 'loginAlert.help' }, { appName: appInfo?.name })}
            </Text>
          </Section>

          <EmailFooter {...appInfo!} />
        </Container>
      </Body>
    </Html>
  );
};

export default LoginAlertEmail;
