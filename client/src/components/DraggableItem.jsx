import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableItem = ({ item, index }) => {

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        padding: 16,
        margin: '0 0 8px 0',
        borderRadius: 5,
        background: isDragging ? "#f4f5f7" : "white",
        border: isDragging ? '0' : '1px solid lightgrey',
        ...draggableStyle
    })

    return (
        <Draggable 
            key={item.id} 
            draggableId={item.id} 
            index={index}
            >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                >
                    {item.content}
                </div>
            )}
        </Draggable>
    )
}

export default DraggableItem;