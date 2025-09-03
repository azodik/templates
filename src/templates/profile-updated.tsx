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

import { ProfileUpdatedEmailProps } from '../schemas';

export const ProfileUpdatedEmail = (props: ProfileUpdatedEmailProps) => {
  const { appInfo, name, updateTime, ipAddress, userAgent, url } = props.payload || {};
  const intl = getIntl(props.lang || 'en');

  return (
    <Html lang={props.lang || 'en'}>
      <Head />
      <Preview>
        {intl.formatMessage({ id: 'profileUpdated.preview' }, { appName: appInfo?.name })}
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
              {intl.formatMessage({ id: 'profileUpdated.title' })}
            </Heading>
            <Text
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0',
              }}
            >
              {intl.formatMessage({ id: 'profileUpdated.subtitle' }, { appName: appInfo?.name })}
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
              {intl.formatMessage({ id: 'profileUpdated.greeting' }, { name })}
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              {intl.formatMessage({ id: 'profileUpdated.body' }, { appName: appInfo?.name })}
            </Text>

            {/* Update Details */}
            <Section
              style={{
                backgroundColor: '#f0f9ff',
                border: '1px solid #0ea5e9',
                borderRadius: '6px',
                padding: '16px',
                marginBottom: '20px',
              }}
            >
              <Text
                style={{
                  color: '#0c4a6e',
                  fontSize: '14px',
                  fontWeight: '600',
                  margin: '0 0 8px 0',
                }}
              >
                {intl.formatMessage({ id: 'profileUpdated.updateDetails' })}
              </Text>
              <Text
                style={{
                  color: '#0c4a6e',
                  fontSize: '13px',
                  margin: '0 0 4px 0',
                }}
              >
                {intl.formatMessage({ id: 'profileUpdated.updateTime' })}: {updateTime}
              </Text>
              <Text
                style={{
                  color: '#0c4a6e',
                  fontSize: '13px',
                  margin: '0 0 4px 0',
                }}
              >
                {intl.formatMessage({ id: 'profileUpdated.ipAddress' })}: {ipAddress}
              </Text>
              <Text
                style={{
                  color: '#0c4a6e',
                  fontSize: '13px',
                  margin: '0',
                }}
              >
                {intl.formatMessage({ id: 'profileUpdated.userAgent' })}: {userAgent}
              </Text>
            </Section>

            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              {intl.formatMessage({ id: 'profileUpdated.securityNotice' })}
            </Text>
          </Section>

          <Section style={{ textAlign: 'center', marginBottom: '28px' }}>
            <EmailButton
              title={intl.formatMessage({ id: 'profileUpdated.buttonText' })}
              link={url}
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
              {intl.formatMessage({ id: 'profileUpdated.help' })}
            </Text>
          </Section>

          <EmailFooter {...appInfo!} />
        </Container>
      </Body>
    </Html>
  );
};

export default ProfileUpdatedEmail;
