import { useState, Component, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import '../styles/Group.css';
import source_data from "../json/groups.json";
import { Flags } from './Flags';

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

class App extends Component {
  state = source_data;

  saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  getStateFromLocalStorage = () => {
    let data = localStorage.getItem('state');
    if (data !== undefined) {
      this.setState(JSON.parse(data!));
    }
  }

  componentDidMount() {
    this.getStateFromLocalStorage();
  }
}

interface GroupInterface {
  id: string;
  country: string;
  code: string;
}

export function Group(props: IndexProps) {
  let groups = source_data.groups;
  const [group, setGroup] = useState(groups.at(props.index))
  let groupLocal = localStorage.getItem("groups")
  useEffect(() => {
    if (groupLocal) {
      let groupConverted = JSON.parse(groupLocal)
      setGroup(groupConverted.at(props.index))
    }
  }, [source_data.groups])

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(group!);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setGroup(items);
    if(groupLocal) {
      groups = JSON.parse(groupLocal)
      groups.splice(props.index, 1, items);
    }
    localStorage.setItem("groups", JSON.stringify(groups));
  }

  return (
    <div className="group-card">
      <h1 className="title">{props.groupName}</h1>
      <div className="group">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='group'>
            {(provided) => (
              <div className="group noselect" {...provided.droppableProps} ref={provided.innerRef}>
                {group!.map(({ id, country, code }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemsStyle(snapshot.isDragging, provided.draggableProps.style)}>
                          <Flags code={code} />
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
