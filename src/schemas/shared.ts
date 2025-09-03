import { z } from 'zod';

export const AppInfoSchema = z
  .object({
    name: z.string(),
    logo: z.url(),
    privacyPolicyUrl: z.url(),
    termsOfServiceUrl: z.url(),
    cookiePolicyUrl: z.url(),
    primaryColor: z.string().optional(),
    secondaryColor: z.string().optional(),
    logoWidth: z.number().default(100).optional(),
    logoHeight: z.number().default(100).optional(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zip: z.string(),
    language: z.string().default('en'),
    theme: z.string().default('light'),
    supportUrl: z.url().optional(),
    githubUrl: z.url().optional(),
    xUrl: z.url().optional(),
  })
  .transform((data) => {
    // Build full address from components
    const addressParts = [data.address, data.city, data.state, data.zip, data.country].filter(
      Boolean,
    ); // Remove empty strings

    const fullAddress = addressParts.length > 0 ? addressParts.join(', ') : '';

    return {
      ...data,
      fullAddress,
    };
  });

export type AppInfoOutput = z.output<typeof AppInfoSchema>;
export type AppInfo = z.input<typeof AppInfoSchema>;
