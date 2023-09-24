import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// <T,>的目的是让React知道这是泛型组件
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} className="gold">
          {render(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
