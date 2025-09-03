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
import { WelcomeEmailProps } from '../schemas';

export const WelcomeEmail = (props: WelcomeEmailProps) => {
  const { appInfo, name, url, plan, region, nextBillingDate } = props;
  const intl = getIntl(appInfo?.language || 'en');
  return (
    <Html lang={appInfo?.language || 'en'}>
      <Head />
      <Preview>{intl.formatMessage({ id: 'welcome.preview' }, { appName: appInfo?.name })}</Preview>
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
              {intl.formatMessage({ id: 'welcome.title' }, { appName: appInfo?.name })}
            </Heading>
            <Text
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0',
              }}
            >
              {intl.formatMessage({ id: 'welcome.subtitle' }, { appName: appInfo?.name })}
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
              {intl.formatMessage({ id: 'welcome.greeting' }, { name })}
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 12px 0',
              }}
            >
              {intl.formatMessage({ id: 'welcome.body' }, { appName: appInfo?.name })}
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              {intl.formatMessage({ id: 'welcome.getStarted' }, { appName: appInfo?.name })}
            </Text>
          </Section>

          <Section
            style={{
              border: '1px solid #ff6b35',
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
              {intl.formatMessage({ id: 'welcome.plan' })}: {plan}
            </Text>
            <Text
              style={{
                color: '#0c4a6e',
                fontSize: '13px',
                margin: '0 0 4px 0',
              }}
            >
              {intl.formatMessage({ id: 'welcome.region' })}: {region}
            </Text>
            <Text
              style={{
                color: '#0c4a6e',
                fontSize: '13px',
                margin: '0',
              }}
            >
              {intl.formatMessage({ id: 'welcome.nextBillingDate' })}: {nextBillingDate}
            </Text>
          </Section>

          <Section style={{ textAlign: 'center', marginBottom: '28px' }}>
            <EmailButton
              title={intl.formatMessage({ id: 'welcome.buttonText' })}
              link={url}
              variant="primary"
              size="medium"
            />
          </Section>

          <Section style={{ marginBottom: '20px' }}>
            <Heading
              style={{
                color: '#555555',
                fontSize: '16px',
                fontWeight: '500',
                margin: '0 0 10px 0',
              }}
            >
              {intl.formatMessage({ id: 'welcome.whatsNext.title' })}
            </Heading>
            <Text
              style={{
                color: '#666666',
                fontSize: '12px',
                lineHeight: '1.4',
                margin: '0 0 6px 0',
              }}
            >
              {intl.formatMessage({ id: 'welcome.whatsNext.subtitle' })}
            </Text>
            <Text
              style={{
                color: '#666666',
                fontSize: '12px',
                lineHeight: '1.4',
                margin: '0 0 4px 0',
                paddingLeft: '12px',
              }}
            >
              • {intl.formatMessage({ id: 'welcome.whatsNext.steps.step1' })}
            </Text>
            <Text
              style={{
                color: '#666666',
                fontSize: '12px',
                lineHeight: '1.4',
                margin: '0 0 4px 0',
                paddingLeft: '12px',
              }}
            >
              • {intl.formatMessage({ id: 'welcome.whatsNext.steps.step2' })}
            </Text>
            <Text
              style={{
                color: '#666666',
                fontSize: '12px',
                lineHeight: '1.4',
                margin: '0 0 4px 0',
                paddingLeft: '12px',
              }}
            >
              • {intl.formatMessage({ id: 'welcome.whatsNext.steps.step3' })}
            </Text>
            <Text
              style={{
                color: '#666666',
                fontSize: '12px',
                lineHeight: '1.4',
                margin: '0 0 4px 0',
                paddingLeft: '12px',
              }}
            >
              • {intl.formatMessage({ id: 'welcome.whatsNext.steps.step4' })}
            </Text>
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
              {intl.formatMessage({ id: 'welcome.help' }, { appName: appInfo?.name })}
            </Text>
          </Section>

          <EmailFooter {...appInfo!} />
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;
