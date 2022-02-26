import React from 'react';
import styles from './Board.module.css';
import { Search } from '@material-ui/icons';
import Kanban from '../../components/Kanban';
import Avatar from '@material-ui/core/Avatar';

const Board = () => {
    return (
        <div className={styles.board_container}>
            <div>
                <p>Projects / Jira Clone</p>
                <h1>Kanban Board</h1>
                <div className={styles.search_section}>
                    <div className={styles.issues_filter}>
                        <input type="search" placeholder="Filter issues" />
                        <Search className={styles.search_icon} />
                    </div>
                    <div className={styles.search_users}>
                        <Avatar
                            alt="Yoda"
                            src="/static/images/avatar/1.jpg"
                            className={styles.yoda_icon}
                        />
                        <Avatar src="/broken-image.jpg" className={styles.add_user} title="Add people"/>
                    </div>
                </div>
            </div>
            <div>
                <Kanban />
            </div>
        </div>
    )
}

export default Board;