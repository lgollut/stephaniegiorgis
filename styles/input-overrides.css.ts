import { field, input, fieldVars } from '@kalink-ui/seedly/components/field';
import { sys } from '@kalink-ui/seedly/styles';
import { overrides } from '@kalink-ui/seedly/styles/layers';
import { globalStyle } from '@vanilla-extract/css';

globalStyle(field, {
  '@layer': {
    [overrides]: {
      vars: {
        [fieldVars.shape.inputCorner]: sys.shape.corner.small,
        [fieldVars.size.inputBlockSize]: 'auto',
      },
    },
  },
});

globalStyle(input, {
  '@layer': {
    [overrides]: {
      paddingBlock: sys.spacing[6],
    },
  },
});
