import { UnorderedListDataInterface } from './unordered-list-data.interface';

export interface UnorderedListInterface extends UnorderedListDataInterface {
  activeItem?: string;
  onItemClick: (item: string) => void;
}
