import React from 'react';
import axios from 'axios';
import { Delete } from '@material-ui/icons';

const DeleteTask = () => {
    const { id, successCallback } = props;

    const deleteTask = (e) => {
        console.log(id);
        if (window.confirm("Delete this? You're about to permanently delete this issue and all of its data. If you're not sure, you can resolve or close this issue instead.")) {
        axios.delete(`http:localhost:8000/task/delete/${id}`)
            .then(res => {
                console.log(res.data)
                console.log("Deleted")
                successCallback();
            })
        }
    }

    return (
        <Delete onClick = {deleteTask} />
    )
}

export default DeleteTask;