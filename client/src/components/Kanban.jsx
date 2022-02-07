import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Kanban.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Kanban = (props) => {
    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState("");

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if(!destination) return;
    }

    // Display tasks
    useEffect(() => {
        axios.get("http://localhost:3000/tasks")
            .then(res => {
                console.log(res);
                setTasks(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>

        </div>
    )
}

export default Kanban;