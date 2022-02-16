import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Kanban.module.css';
import { DragDropContext } from 'react-beautiful-dnd';
import DropContainer from './DropContainer';
import { Add, Warning, Close } from '@material-ui/icons';
import Detail from './Detail';
import DraggableItem from './DraggableItem';


const Kanban = (props) => {

    // generate dummy data
    const generateData = (category, count) =>
        Array.from({ length: category }, (i, j) => j).map(j => ({
            id: `${j}`,
            category: `To Do - ${j + 1}`,
            content: Array.from({ length: count }, (m, n) => n).map(n => ({
                id: `task-${j}-${n}`,
                content: `task ${j}-${n}`
            }))
        }));

    const [columns, setColumns] = useState([]);
    const [taskCard, setTaskCard] = useState([]);
    const [data, setData] = useState(generateData(3, 5))
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [assignee, setAssignee] = useState("");
    const [reporter, setReporter] = useState("");
    const [error, setError] = useState(false);

    const newTask = {
        title,
        description,
        status,
        assignee,
        reporter
    }

    const onDragEnd = (result) => {
        const { source, destination } = result;
        // Have card return back to its position if there is no destination
        if (!destination) return;

        // Grab source and destination columns
        const sourceIndex = +source.droppableId;
        const destIndex = +destination.droppableId;

        // If it's the same column
        if (sourceIndex === destIndex) {
            const tasks = reorder(data[sourceIndex].content, source.index, destination.index);
            const newData = [...data];
            newData[sourceIndex].content = tasks;
            setData(newData);
        } else {
            const result = move(data[sourceIndex].content, data[destIndex].content, source, destination);
            const newData = [...data];
            newData[sourceIndex].content = result[sourceIndex];
            newData[destIndex].content = result[destIndex];
            setData(newData);
        }
    }

    // Move items within a column
    const reorder = (data, startIndex, endIndex) => {
        const clonedData = Array.from(data);
        const [removed] = clonedData.splice(startIndex, 1);
        clonedData.splice(endIndex, 0, removed);

        return clonedData;
    }

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    }

    // Display tasks
    useEffect(() => {
        axios.get("http://localhost:8000/tasks")
            .then(res => {
                console.log(res.data);
                setTaskCard(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // Create tasks
    const createTask = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/task/new", newTask)
            .then(res => console.log(res.data))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                setError(true);
            })
        setError(false);
        setTitle("");
    }

    // Button to input field
    const makeInput = (e) => {
        e.currentTarget.style.display = "none";
        document.getElementById("task-input").style.display = "block";
    }

    // Remove from DOM
    const removeFromDom = (id) => {
        setTaskCard(taskCard.filter(taskCard => taskCard._id !== id));
    }

    return (
        <div>
            <div className={styles.kanban_container}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {
                        data.map((data_, index) => <DropContainer key={index} {...{ data: data_ }} />)
                    }
                </DragDropContext>
            </div>
            <form onSubmit={createTask}>
                <div
                    className={styles.create_issue}
                    onClick={makeInput}>
                    <Add className={styles.create_icon} /> Create issue
                </div>
                <input
                id={"task-input"}
                className={styles.task_form}
                style={{ display: "none" }}
                type="text"
                placeholder="What needs to be done?"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onKeyPress={(e) => e.key === "Enter" ? createTask() : null}
            />
            </form>
            {
                error ?
                    <div className={styles.error_card}>
                        <div className={styles.error_message}>
                            <Warning className={styles.warning_icon} />
                            <strong>We couldn't save the issue summary.</strong>
                            <Close
                                className={styles.close_icon}
                                onClick={(e) => setError(false)}
                            />
                        </div>
                        <p>You must specify a summary of the issue.</p>
                    </div>
                : null
            }
            <Detail />
        </div>
    )
}


export default Kanban;