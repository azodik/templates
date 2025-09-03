import { Button, Section } from '@react-email/components';

interface EmailButtonProps {
  title: string;
  link: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const EmailButton = ({
  title,
  link,
  variant = 'primary',
  size = 'medium',
}: EmailButtonProps) => {
  const getButtonStyles = () => {
    const baseStyles = {
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: 'bold',
      textAlign: 'center' as const,
    };

    const sizeStyles = {
      small: {
        padding: '8px 16px',
        fontSize: '14px',
      },
      medium: {
        padding: '12px 24px',
        fontSize: '16px',
      },
      large: {
        padding: '16px 32px',
        fontSize: '18px',
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: '#f76a15',
        color: '#ffffff',
      },
      secondary: {
        backgroundColor: '#ffffff',
        color: '#f76a15',
        border: '2px solid #f76a15',
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return (
    <Section style={{ textAlign: 'center', margin: '32px 0' }}>
      <Button style={getButtonStyles()} href={link}>
        {title}
      </Button>
    </Section>
  );
};

export default EmailButton;
