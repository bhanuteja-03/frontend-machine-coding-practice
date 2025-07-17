import type { List } from "./types";

interface ListItemI {
  item: List;
  position: "left" | "right";
  onChangeCheckbox: (id: number, position: "left" | "right") => void;
}

export const ListItem: React.FC<ListItemI> = ({
  item,
  onChangeCheckbox,
  position,
}) => (
  <li key={item.id} className="flex justify-center items-center bg-gray-200">
    <input
      type="checkbox"
      checked={item.selected}
      aria-checked={item.selected}
      className="mr-1"
      onChange={() => {
        onChangeCheckbox(item.id, position);
      }}
    />
    <p>{item.content}</p>
  </li>
);
