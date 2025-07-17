import { ListItem } from "./ListItem";
import type { List } from "./types";

export const ListContainer: React.FC<{
  list: List[];
  position: "left" | "right";
  onChangeCheckbox: (id: number, position: "left" | "right") => void;
}> = ({ list, position, onChangeCheckbox }) => {
  if (list.length == 0) {
    return <p>No items in List</p>;
  }

  return (
    <ul className="flex flex-col justify-center items-start gap-1">
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          position={position}
          onChangeCheckbox={onChangeCheckbox}
        />
      ))}
    </ul>
  );
};
