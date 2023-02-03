import { UnorderedListDataInterface } from './unordered-list-data.interface';

export interface UnorderedListInterface<T>
  extends UnorderedListDataInterface<T> {
  activeItem?: T;
  onItemClick: (item: T) => void;
}
