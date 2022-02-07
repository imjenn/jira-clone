import React from 'react';
import styles from './Board.module.css';
import { Search } from '@material-ui/icons';

const Board = () => {
    return (
        <div className={styles.board_container}>
            <div>
                <p>Projects / Jira Clone</p>
                <h1>Kanban Board</h1>
                <div className={styles.issues_filter}>
                    <input type="search" placeholder="Filter issues"/>
                    <Search className={styles.search_icon} />
                </div>
            </div>
        </div>
    )
}

export default Board;