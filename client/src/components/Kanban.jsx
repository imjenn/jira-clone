import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Kanban.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Add, Warning, Close } from '@material-ui/icons';

const Kanban = (props) => {
    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState("");

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
        if (!destination) return;
    }

    // Display tasks
    // useEffect(() => {
    //     axios.get("http://localhost:8000/tasks")
    //         .then(res => {
    //             console.log(res);
    //             setTasks(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    // Create tasks
    const createTask = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/task/new", newTask)
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                setError(true);
            })
        setError(false);
    }

    // Button to input field
    const makeInput = (e) => {
        e.currentTarget.style.display = "none";
        document.getElementById("task-input").style.display = "block";
    }

    return (
        <div>
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
            </form>
        </div>
    )
}

export default Kanban;