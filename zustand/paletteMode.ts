import { NamedSet } from 'zustand/middleware';
import { GetState, State } from 'zustand';

interface Store extends State {
  paletteMode: string;
  setPaletteMode: () => void;
}

const createPaletteModeSlice = (
  set: NamedSet<Store>,
  get: GetState<Store>
) => ({
  paletteMode: 'light',
  setPaletteMode: () =>
    set(
      {
        paletteMode: get().paletteMode === 'dark' ? 'light' : 'dark',
      },
      false,
      'SET_PALETTE_MODE'
    ),
});

export default createPaletteModeSlice;
