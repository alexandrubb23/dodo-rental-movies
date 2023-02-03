export interface SortingOptionsInterface<T> {
  currentField: T;
  data: T[];
  onClick: (fieldName: T) => void;
  title: string;
}
