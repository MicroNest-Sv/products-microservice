import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}

const envsSchema = joi
  .object<EnvVars>({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);

const validatedEnvs = envsSchema.validate(process.env, {
  abortEarly: false,
});

if (validatedEnvs.error) {
  throw new Error(`Config validation error: ${validatedEnvs.error.message}`);
}

const envVars = validatedEnvs.value;

export const envs = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};
