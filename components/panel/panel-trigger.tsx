import { Menu } from 'lucide-react';
import { ForwardedRef, forwardRef } from 'react';

import { Button } from '@/components/button';
import { usePanelContext } from '@/components/panel/panel-context';
import { PanelTriggerProps } from '@/components/panel/panel-trigger.types';

type PanelTriggerElement = HTMLButtonElement;

const PanelTrigger = (
  { icon: Icon = Menu }: PanelTriggerProps,
  ref: ForwardedRef<PanelTriggerElement>,
) => {
  const { onOpen } = usePanelContext();

  return (
    <Button ref={ref} variant="bare" icon={Icon} onClick={onOpen} iconOnly />
  );
};

const WrappedPanelTrigger = forwardRef(PanelTrigger);

export { WrappedPanelTrigger as PanelTrigger };
