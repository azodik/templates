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

interface EmailChangedEmailProps {
  name?: string;
  oldEmail?: string;
  newEmail?: string;
  changeTime?: string;
  ipAddress?: string;
  location?: string;
  accountSettingsUrl?: string;
  lang?: string;
}

export const EmailChangedEmail = ({
  name = 'User',
  oldEmail = 'old@example.com',
  newEmail = 'new@example.com',
  changeTime = new Date().toLocaleString(),
  ipAddress = '192.168.1.1',
  location = 'New York, NY, United States',
  accountSettingsUrl = 'https://authzio.com/account/security',
  lang = 'en',
}: EmailChangedEmailProps) => {
  const intl = getIntl(lang);

  return (
    <Html>
      <Head />
      <Preview>{intl.formatMessage({ id: 'emailChanged.preview' })}</Preview>
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
          {/* <EmailHeader /> */}

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
              {intl.formatMessage({ id: 'emailChanged.title' })}
            </Heading>
            <Text
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0',
              }}
            >
              {intl.formatMessage({ id: 'emailChanged.subtitle' })}
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
              {intl.formatMessage({ id: 'emailChanged.greeting' }, { name })}
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              {intl.formatMessage({ id: 'emailChanged.body' })}
            </Text>

            {/* Email Change Details */}
            <Section
              style={{
                backgroundColor: '#fef3c7',
                border: '1px solid #f59e0b',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
              }}
            >
              <Text
                style={{
                  color: '#92400e',
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: '0 0 16px 0',
                }}
              >
                {intl.formatMessage({ id: 'emailChanged.changeDetails' })}
              </Text>

              <Section style={{ marginBottom: '12px' }}>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    fontWeight: '600',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'emailChanged.oldEmail' })}:
                </Text>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '14px',
                    margin: '0 0 12px 0',
                    fontStyle: 'italic',
                  }}
                >
                  {oldEmail}
                </Text>
              </Section>

              <Section style={{ marginBottom: '12px' }}>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    fontWeight: '600',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'emailChanged.newEmail' })}:
                </Text>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '14px',
                    margin: '0 0 12px 0',
                    fontWeight: '500',
                  }}
                >
                  {newEmail}
                </Text>
              </Section>

              <Section style={{ marginBottom: '12px' }}>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    fontWeight: '600',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'emailChanged.changeTime' })}:
                </Text>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    margin: '0 0 12px 0',
                  }}
                >
                  {changeTime}
                </Text>
              </Section>

              <Section style={{ marginBottom: '12px' }}>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    fontWeight: '600',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'emailChanged.ipAddress' })}:
                </Text>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    margin: '0 0 12px 0',
                  }}
                >
                  {ipAddress}
                </Text>
              </Section>

              <Section>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    fontWeight: '600',
                    margin: '0 0 4px 0',
                  }}
                >
                  {intl.formatMessage({ id: 'emailChanged.location' })}:
                </Text>
                <Text
                  style={{
                    color: '#92400e',
                    fontSize: '13px',
                    margin: '0',
                  }}
                >
                  {location}
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
              {intl.formatMessage({ id: 'emailChanged.securityNotice' })}
            </Text>
          </Section>

          <Section style={{ textAlign: 'center', marginBottom: '28px' }}>
            <EmailButton
              title={intl.formatMessage({ id: 'emailChanged.buttonText' })}
              link={accountSettingsUrl}
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
              {intl.formatMessage({ id: 'emailChanged.help' })}
            </Text>
          </Section>

          {/* <EmailFooter lang={lang} /> */}
        </Container>
      </Body>
    </Html>
  );
};

export default EmailChangedEmail;
