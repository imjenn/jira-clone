import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableItem from './DraggableItem';

const DropContainer = ({data}) => {
    const getListStyle = isDraggingOver => ({
        background: "#f4f5f7",
        padding: 4,
        width: 250,
        boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.3)',
        margin: '10px'
    });

    return (
        <Droppable droppableId = {data.id}>
            {(provided, snapshot) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <h3>{data.category}</h3>
                {data.content.map((item, index) => (
                  <DraggableItem 
                      key={index}  
                      {...{item, index}}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
        </Droppable>
    )
}

export default DropContainer;