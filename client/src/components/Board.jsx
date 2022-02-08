import React from 'react';
import styles from './Board.module.css';
import { Search } from '@material-ui/icons';
import Kanban from './Kanban';

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
            <div>
                <Kanban />
            </div>
        </div>
    )
}

export default Board;