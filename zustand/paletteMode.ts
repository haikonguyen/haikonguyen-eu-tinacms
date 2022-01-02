import { NamedSet } from 'zustand/middleware';
import { GetState, State } from 'zustand';
import { PaletteMode } from '@mui/material';

interface Store extends State {
  paletteMode: PaletteMode;
  setPaletteMode: () => void;
}

const createPaletteModeSlice = (
  set: NamedSet<Store>,
  get: GetState<Store>
) => ({
  paletteMode: 'dark',
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
