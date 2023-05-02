import { Client } from './client';

export interface Auth {
  client: Client | null;
  token: string | null;
}
