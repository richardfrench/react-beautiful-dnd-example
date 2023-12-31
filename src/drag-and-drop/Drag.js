import { Draggable } from "react-beautiful-dnd";

export const Drag = ({ id, index, ...props }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            className={snapshot.isDragging ? "draggable dragging" : "draggable"}
            {...provided.draggableProps}
            {...props}
          >
            <div className="drag-handle" {...provided.dragHandleProps}>
              Drag
            </div>
            {props.children}
          </div>
        );
      }}
    </Draggable>
  );
};
