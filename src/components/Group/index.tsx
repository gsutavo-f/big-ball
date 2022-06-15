import { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import source_data from "../../json/groups.json";
import Flag from '../Flag';
import styles from '../../styles/BigBall.module.scss';
import { GroupProps, Country } from '../../types';

function getItemsStyle(isDragging: boolean, draggableStyle: any) {
  return ({
    padding: `10px`,
    marginBottom: `0px`,
    background: isDragging ? "#2A8C68" : "#2A8C68",
    color: isDragging ? "#010326" : "#010326",
    fontSize: `2em`,
    fontWeight: `600`,
    borderRadius: isDragging ? `4px` : `0`,
    textAlign: `left`,
    width: `190px`,

    ...draggableStyle
  });
}

export function Group(props: GroupProps) {
  const [group, setGroup] = useState<Country[]>([]);

  if (localStorage.getItem("groups") == null) {
    localStorage.setItem("groups", JSON.stringify(source_data.groups));
  }

  useEffect(() => {
    const groupsStoraged = JSON.parse(localStorage.getItem("groups")!);
    setGroup(groupsStoraged.at(props.index));
  }, []);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(group);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setGroup(items);

    let groupsConverted = JSON.parse(localStorage.getItem("groups")!)
    groupsConverted.splice(props.index, 1, items);
    localStorage.setItem("groups", JSON.stringify(groupsConverted));
  }

  return (
    <div className={styles.groupCard}>
      <h1 className={styles.title}>{props.groupName}</h1>
      <div className={styles.group}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='group'>
            {(provided) => ( // como adicionar o noselect aqui???
              <div className={styles.group} {...provided.droppableProps} ref={provided.innerRef}>
                {group.map(({ id, country, code }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemsStyle(snapshot.isDragging, provided.draggableProps.style)}>
                          <Flag code={code} />
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
