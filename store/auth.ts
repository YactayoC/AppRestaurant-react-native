import { atom } from 'jotai';
import { Auth } from '../models';
import { DataAtom } from '../interfaces';

export const authAtom = atom<DataAtom<Auth | null>>({
  data: {
    client: null,
    token: null,
  },
  isLoading: false,
});
