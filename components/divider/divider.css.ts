import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';

export const divider = style({
  height: 1,

  borderWidth: 0,
  borderStyle: 'none',
  backgroundColor: `color-mix(in srgb, ${sys.color.foreground} 20%, transparent)`,
});
