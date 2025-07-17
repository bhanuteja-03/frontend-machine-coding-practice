import { useState } from "react";
import type { List } from "./types";
import { ListContainer } from "./ListContainer";

const sampleList: List[] = [
  { id: 1, content: "Buy groceries", selected: false },
  { id: 2, content: "Read a book", selected: true },
  { id: 3, content: "Workout", selected: false },
  { id: 4, content: "Call Mom", selected: true },
  { id: 5, content: "Clean the house", selected: false },
];

export const TransferList: React.FC = () => {
  const [leftList, setLeftList] = useState<List[]>(sampleList);
  const [rightList, setRightList] = useState<List[]>([]);

  const onChangeCheckbox = (id: number, position: "left" | "right") => {
    const list = position == "left" ? leftList : rightList;

    const updatedList = list.map((item) => {
      if (item.id == id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });

    position == "left" ? setLeftList(updatedList) : setRightList(updatedList);
  };

  const handleTransfer = (to: "right" | "left") => {
    const list = to == "left" ? rightList : leftList;

    const updatedList = list.filter((item) => item.selected);

    const modifiedList = updatedList.map((item) => {
      return { ...item, selected: false };
    });

    if (to === "left") {
      setLeftList((prev) => [...prev, ...modifiedList]);
      setRightList((prev) => prev.filter((item) => !item.selected));
    } else {
      setRightList((prev) => [...prev, ...modifiedList]);
      setLeftList((prev) => prev.filter((item) => !item.selected));
    }
  };

  return (
    <div className="flex justify-center items-center gap-10">
      <ListContainer
        list={leftList}
        position={"left"}
        onChangeCheckbox={onChangeCheckbox}
      />
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          type="button"
          aria-label="Transfer selected item to right"
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={() => handleTransfer("right")}
          disabled={!leftList.some((item) => item.selected)}
        >
          &gt;
        </button>

        <button
          type="button"
          aria-label="Transfer selected item to left"
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={() => handleTransfer("left")}
          disabled={!rightList.some((item) => item.selected)}
        >
          &lt;
        </button>
      </div>
      <ListContainer
        list={rightList}
        position={"right"}
        onChangeCheckbox={onChangeCheckbox}
      />
    </div>
  );
};
