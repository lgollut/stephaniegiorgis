'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useSyncExternalStore, useState } from 'react';

import { PanelContextProvider } from '@/components/panel/panel-context';
import { PanelProps } from '@/components/panel/panel.types';

export const Panel = ({ children }: PanelProps) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useSyncExternalStore(
    (onStoreChange) => {
      onStoreChange();
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    },
    () => pathname,
    () => pathname,
  );

  if (open && pathname) {
    queueMicrotask(() => {
      setOpen(false);
    });
  }

  return (
    <PanelContextProvider value={{ open, onOpen, onClose }}>
      {children}
    </PanelContextProvider>
  );
};
