export type DistributiveOmit<
  T,
  TOmitted extends PropertyKey,
> = T extends unknown ? Omit<T, TOmitted> : never;
