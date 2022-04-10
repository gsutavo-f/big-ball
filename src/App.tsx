import { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import './App.css';
import source_data from "./json/groups.json";

const getItemsStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  margin: `0 50px 15px 50px`,
  background: isDragging ? "#4a2975" : "white",
  color: isDragging ? "white" : "black",
  border: `1px solid black`,
  fontSize: `20px`,
  borderRadius: `5px`,

  ...draggableStyle
})

type IndexProps = {
  index: number;
}

export function App(props: IndexProps) {
  const [group, setGroup] = useState(source_data.groups.at(props.index))

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    const items = Array.from(group!)
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    setGroup(items)
  }

  return (
    <div className="App">
      <h1>Grupo</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='group'>
          {(provided) => (
            <div className="group" {...provided.droppableProps} ref={provided.innerRef}>
              {group!.map(({ id, country }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemsStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        {country}
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
