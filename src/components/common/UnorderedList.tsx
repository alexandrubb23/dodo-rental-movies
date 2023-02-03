import { UnorderedListInterface } from '../../models/interfaces';

const UnorderedList = <T extends {} | string>({
  activeItem,
  data,
  onItemClick,
}: UnorderedListInterface<T>) => {
  return (
    <ul>
      {data.map((item: T) => {
        const isActive = item === activeItem ? ' active' : '';

        return (
          <li
            className={`text__transition${isActive}`}
            key={item as string}
            onClick={() => onItemClick(item)}
          >
            {item as string}
          </li>
        );
      })}
    </ul>
  );
};

export default UnorderedList;
