import { NamedSet } from 'zustand/middleware';
import { GetState, State } from 'zustand';

interface Store extends State {
  bState: string;
  setPaletteMode: () => void;
}

const createBSlice = (set: NamedSet<Store>, get: GetState<Store>) => ({
  bState: 'light',
  setBMode: () =>
    set(
      {
        bState: get().bState === 'dark' ? 'light' : 'dark',
      },
      false,
      'SET_PALETTE_MODE'
    ),
});

export default createBSlice;
