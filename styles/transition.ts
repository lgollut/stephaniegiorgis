import { sys } from '@kalink-ui/seedly/styles';

const durationMap = {
  shorter: sys.motion.duration.short[1],
  short: sys.motion.duration.short[2],
  base: sys.motion.duration.short[3],
  long: sys.motion.duration.short[4],
} as const;

const easingMap = {
  inOut: sys.motion.easing.standard,
} as const;

export const transition: (
  props: string | string[],
  options?: {
    duration?: keyof typeof durationMap;
    easing?: keyof typeof easingMap;
    delay?: string;
  },
) => string = (props = ['all'], options = {}) =>
  (Array.isArray(props) ? props : [props])
    .map(
      (animatedProp) =>
        `${animatedProp} ${
          options.duration ? durationMap[options.duration] : durationMap.base
        } ${options.easing ? easingMap[options.easing] : easingMap.inOut} ${
          options.delay || '0ms'
        }`,
    )
    .join(',');
