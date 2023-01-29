import { UnorderedListInterface } from '../../models/interfaces';

const UnorderedList = ({
  activeItem,
  data,
  onItemClick,
}: UnorderedListInterface) => {
  return (
    <ul>
      {data.map((item: string) => {
        const isActive = item === activeItem ? ' active' : '';

        return (
          <li
            className={`text__transition${isActive}`}
            key={item}
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default UnorderedList;
