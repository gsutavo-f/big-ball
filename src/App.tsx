import { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import './App.css';
import source_data from "./json/groups.json";

const getItemsStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  marginBottom: `0px`,
  background: isDragging ? "#adc0b4" : "#bed6c7",
  color: isDragging ? "#444444" : "#444444",
  fontSize: `20px`,
  fontWeight: `600`,
  borderRadius: isDragging ? `4px` : `0`,
  textAlign: `center`,
  width: `150px`,

  ...draggableStyle
})

type IndexProps = {
  index: number;
  groupName: string;
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
    <div className="group-card">
      <h1>{props.groupName}</h1>
      <div className="group">
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
    </div>
  )
}
