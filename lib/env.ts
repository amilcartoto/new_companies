export const requiredServerEnvVars = [
  'CLERK_SECRET_KEY',
  'DATABASE_URL',
  'UPLOADTHING_SECRET',
  'UPLOADTHING_APP_ID',
] as const;

export const requiredClientEnvVars = [
  'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
  'NEXT_PUBLIC_APP_URL',
] as const;

type RequiredServerEnvVars = typeof requiredServerEnvVars[number];
type RequiredClientEnvVars = typeof requiredClientEnvVars[number];

export function validateServerEnv() {
  const missingVars: RequiredServerEnvVars[] = [];

  for (const envVar of requiredServerEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required server environment variables:\n${missingVars.join('\n')}`
    );
  }
}

export function validateClientEnv() {
  const missingVars: RequiredClientEnvVars[] = [];

  for (const envVar of requiredClientEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required client environment variables:\n${missingVars.join('\n')}`
    );
  }
}

// Utility function to get env vars with type safety
export function getEnvVar(key: RequiredServerEnvVars | RequiredClientEnvVars): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
} 