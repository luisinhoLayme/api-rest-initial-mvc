import env from 'env-var'
const { get } = env

export const envs = {
  PORT: get('PORT').required().asPortNumber(),

  MONGO_URI: get('MONGO_URI').required().asString(),
  DB_NAME: get('DB_NAME').required().asString(),

}
