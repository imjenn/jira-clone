import React from 'react';
import styles from './Board.module.css';

const Board = () => {
    return (
        <div className={styles.board_container}>
            <div>
                <p>Projects / Jira Clone</p>
                <h1>Kanban Board</h1>
            </div>
        </div>
    )
}

export default Board;