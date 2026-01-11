import { sys } from '@kalink-ui/seedly/styles';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { transition } from '@/styles/transition';

const panelContentBase = style({
  position: 'fixed',
  top: 0,
  insetInlineStart: 0,
  height: '100vh',
  width: calc.multiply(sys.spacing[4], 20),
  maxWidth: '90%',
  zIndex: 9999,

  backgroundColor: sys.color.background,

  transform: 'translateX(-100%)',
  transition: transition(['transform'], { duration: 'base' }),
});

export const panelContent = recipe({
  base: panelContentBase,

  variants: {
    open: {
      true: {
        transform: 'translateX(0)',
      },
    },
  },
});

const panelOverlayBase = style({
  position: 'fixed',
  top: 0,
  insetInlineStart: 0,
  width: '100vw',
  height: '100vh',

  opacity: 0,
  backgroundColor: `color-mix(in srgb, ${sys.color.foreground} 50%, transparent)`,
  backdropFilter: 'blur(10px)',

  transition: transition(['opacity'], { duration: 'base' }),
  pointerEvents: 'none',
});

export const panelOverlay = recipe({
  base: panelOverlayBase,

  variants: {
    open: {
      true: {
        opacity: 1,
      },
    },
  },
});
