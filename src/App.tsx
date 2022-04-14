import { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import './App.css';
import source_data from "./json/groups.json";
import ReactCountryFlag from "react-country-flag";

const getItemsStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  marginBottom: `0px`,
  background: isDragging ? "#2A8C68" : "#2A8C68",
  color: isDragging ? "#010326" : "#010326",
  fontSize: `20px`,
  fontWeight: `600`,
  borderRadius: isDragging ? `4px` : `0`,
  textAlign: `left`,
  width: `190px`,

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
      <h1 className="title">{props.groupName}</h1>
      <div className="group">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='group'>
            {(provided) => (
              <div className="group" {...provided.droppableProps} ref={provided.innerRef}>
                {group!.map(({ id, country, code }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemsStyle(snapshot.isDragging, provided.draggableProps.style)}>
                          {/* <ReactCountryFlag
                            countryCode={code}
                            svg
                            style={{
                              width: '2em',
                              height: '2em',
                              marginRight: '0.5rem'
                            }}
                            title={code}
                          /> */}
                          <ReactCountryFlag
                            countryCode={code}
                            svg
                            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                            style={{
                              width: '1.5rem',
                              height: '1.5rem',
                              borderRadius: '50%',
                              marginRight: '0.75rem',
                              boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)'
                            }}
                            cdnSuffix="svg"
                            title={code}
                          />
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
