import { ReactNode, SyntheticEvent } from 'react';

export interface PanelProps {
  children: ReactNode;
  open?: boolean;
}

export interface PanelContext {
  open: boolean;
  onOpen: (e?: SyntheticEvent | Event) => void;
  onClose: (e?: SyntheticEvent | Event) => void;
}
