import { Button } from '@kalink-ui/seedly';
import { Menu } from 'lucide-react';

import { usePanelContext } from '@/components/panel/panel-context';
import { PanelTriggerProps } from '@/components/panel/panel-trigger.types';

export const PanelTrigger = ({ icon: Icon = Menu }: PanelTriggerProps) => {
  const { onOpen } = usePanelContext();

  return (
    <Button
      variant="bare"
      size="sm"
      startSlot={<Icon size={24} />}
      aria-label="Open panel"
      onClick={onOpen}
    />
  );
};
