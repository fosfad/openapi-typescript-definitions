import { HeaderParameter } from './parameter';

export type Header = Omit<HeaderParameter, 'in' | 'name'>;
