import Keycloak from 'keycloak-connect';
import session from 'express-session';
import { config } from 'dotenv';

config();

export default function getKeycloak(): Keycloak.Keycloak {
  const store = new session.MemoryStore();
  return new Keycloak({ store }, {
    'confidential-port': Number(process.env.CONFIDENTIAL_PORT),
    'auth-server-url': String(process.env.AUTH_SERVER_URL),
    'resource': String(process.env.RESOURCE),
    'ssl-required': String(process.env.SSL_REQUIRED),
    'bearer-only': true,
    'realm': String(process.env.REALM)
  });    
}
