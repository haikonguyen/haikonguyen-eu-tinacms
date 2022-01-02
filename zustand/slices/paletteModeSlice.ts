import { NamedSet } from 'zustand/middleware';
import { GetState } from 'zustand';
import { PaletteModeSliceProps } from '../types';

const createPaletteModeSlice = (
  set: NamedSet<PaletteModeSliceProps>,
  get: GetState<PaletteModeSliceProps>
): PaletteModeSliceProps => ({
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
