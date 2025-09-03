import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { EmailButton } from '../components/EmailButton';

interface MarketingNewsletterProps {
  name?: string;
  userEmail?: string;
  newsletterLink?: string;
  unsubscribeLink?: string;
  managePreferencesLink?: string;
}

export const MarketingNewsletter = ({
  name = 'User',
  userEmail = 'user@example.com',
  newsletterLink = 'https://authzio.com/newsletter',
  unsubscribeLink = 'https://authzio.com/unsubscribe',
  managePreferencesLink = 'https://authzio.com/preferences',
}: MarketingNewsletterProps) => {
  return (
    <Html>
      <Head />
      <Preview>AuthZio Newsletter - Latest Updates & Features</Preview>
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
              AuthZio Newsletter
            </Heading>
            <Text
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0',
              }}
            >
              Stay updated with the latest authentication features and security insights.
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
              Hello {name},
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 12px 0',
              }}
            >
              We're excited to share the latest updates and improvements from AuthZio. Here's what's
              new and what's coming next for your authentication projects.
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 20px 0',
              }}
            >
              Discover how these new features can enhance your application's security and user
              experience:
            </Text>
          </Section>

          <Section style={{ marginBottom: '24px' }}>
            <Heading
              style={{
                color: '#1a1a1a',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 12px 0',
              }}
            >
              🚀 New Features & Updates
            </Heading>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 8px 0',
              }}
            >
              Here's what's new in AuthZio:
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • Enhanced Multi-Factor Authentication with biometric support
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • Improved User Management Dashboard with real-time analytics
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • Advanced Security Analytics and threat detection
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • New SDK integrations for React Native and Flutter
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • Enhanced API rate limiting and DDoS protection
            </Text>
          </Section>

          <Section style={{ marginBottom: '24px' }}>
            <Heading
              style={{
                color: '#1a1a1a',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 12px 0',
              }}
            >
              📈 Performance Improvements
            </Heading>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 8px 0',
              }}
            >
              We've also made significant performance improvements:
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • 40% faster authentication response times
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • Improved uptime to 99.99% reliability
            </Text>
            <Text
              style={{
                color: '#333333',
                fontSize: '14px',
                lineHeight: '1.5',
                margin: '0 0 6px 0',
                paddingLeft: '16px',
              }}
            >
              • Enhanced global CDN coverage for better latency
            </Text>
          </Section>

          <Section style={{ textAlign: 'center', marginBottom: '28px' }}>
            <EmailButton
              title="Read Full Newsletter"
              link={newsletterLink}
              variant="primary"
              size="medium"
            />
          </Section>

          <Section style={{ marginBottom: '20px' }}>
            <Text
              style={{
                color: '#666666',
                fontSize: '13px',
                lineHeight: '1.4',
                margin: '0',
              }}
            >
              <strong>Stay Connected:</strong> Follow us on social media for real-time updates,
              security tips, and developer insights. Join our community of developers building
              secure applications.
            </Text>
          </Section>

          {/* <EmailFooter
            isMarketing={true}
            unsubscribeLink={unsubscribeLink}
            managePreferencesLink={managePreferencesLink}
          /> */}
        </Container>
      </Body>
    </Html>
  );
};

export default MarketingNewsletter;
