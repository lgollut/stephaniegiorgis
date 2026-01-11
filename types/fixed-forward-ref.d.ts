/// <reference types="react" />

declare namespace React {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode,
  ): (props: P & React.RefAttributes<T>) => React.ReactNode;
}
