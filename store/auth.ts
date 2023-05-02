import { atom } from 'jotai';
import { Auth } from '../models';

export const authAtom = atom<Auth | null>({
  client: null,
  token: null,
});
