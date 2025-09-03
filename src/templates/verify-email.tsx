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
import { VerifyEmailProps } from '../schemas';

export const VerifyEmail = (props: VerifyEmailProps) => {
  const { appInfo, name, url } = props.payload || {};
  const intl = getIntl(props.lang || 'en');
  return (
    <Html lang={props.lang || 'en'}>
      <Head />
      <Preview>
        {intl.formatMessage({ id: 'verifyEmail.preview' }, { appName: appInfo?.name })}
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
              {intl.formatMessage({ id: 'verifyEmail.title' }, { appName: appInfo?.name })}
            </Heading>
            <Text
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0',
              }}
            >
              {intl.formatMessage({ id: 'verifyEmail.subtitle' }, { appName: appInfo?.name })}
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
              {intl.formatMessage({ id: 'verifyEmail.greeting' }, { name })}
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 12px 0',
              }}
            >
              {intl.formatMessage({ id: 'verifyEmail.body' }, { appName: appInfo?.name })}
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              {intl.formatMessage({ id: 'verifyEmail.help' }, { appName: appInfo?.name })}
            </Text>
          </Section>

          <Section style={{ textAlign: 'center', marginBottom: '28px' }}>
            <EmailButton
              title={intl.formatMessage({ id: 'verifyEmail.buttonText' })}
              link={url}
              variant="primary"
              size="medium"
            />
          </Section>

          <EmailFooter {...appInfo!} />
        </Container>
      </Body>
    </Html>
  );
};

export default VerifyEmail;
