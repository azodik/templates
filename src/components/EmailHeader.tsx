import { Container, Section } from '@react-email/components';
export const EmailHeader = ({
  logo = 'https://azodik.com/logo.svg',
  appName,
}: {
  logo: string;
  appName: string;
}) => {
  return (
    <Container style={{ padding: '0 20px' }}>
      <Section style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={logo} alt={appName} style={{ width: '100px', height: '60px' }} />
      </Section>
    </Container>
  );
};

export default EmailHeader;
