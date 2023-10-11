import React, { useState } from "react";
import { DragAndDrop, Drag, Drop } from "./drag-and-drop";
import { reorder } from "./helpers.js";

export const ListComponent = () => {
  const [items, setItems] = useState([
    { id: "abc", name: "First" },
    { id: "def", name: "Second" },
    { id: "ghi", name: "Third" }
  ]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const reorderedItems = reorder([...items], source.index, destination.index);

    setItems(reorderedItems);
  };

  return (
    <DragAndDrop onDragEnd={handleDragEnd}>
      <Drop id="droppable-id">
        {items.map((item, index) => {
          return (
            <Drag key={item.id} id={item.id} index={index}>
              <div className="item">{item.name}</div>
            </Drag>
          );
        })}
      </Drop>
    </DragAndDrop>
  );
};
