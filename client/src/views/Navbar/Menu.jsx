import React from 'react';
import styles from './Menu.module.css';
import { OpenInNew, Settings } from '@material-ui/icons';

const Menu = () => {

    return (
        <div className={styles.menu_container}>
            <div className={styles.menu_container_header}>
                <h1>Switch to</h1>
                <div className={styles.menu_container_link}>
                    <a href="">Atlassian Start</a>
                    <OpenInNew className={styles.open_in_new} />
                </div>
            </div>
            <ul>
                <li>
                    <div className={styles.menu_logo}>
                        <img src="https://fd-assets.prod.atl-paas.net/images/logos/jira-software/jira-software-white.svg" alt="Jira software"/>
                    </div>
                    <p>Jira Software</p>
                </li>
                <li>
                    <div className={styles.menu_logo}>
                        <img src="https://fd-assets.prod.atl-paas.net/images/logos/jira-work-management/jira-work-management-white.svg" alt=""/>
                    </div>
                    <p>Jira Work Management</p>
                </li>
                <li>
                    <div className={styles.menu_logo}>
                        <img src="https://fd-assets.prod.atl-paas.net/images/logos/confluence/confluence-white.svg" alt=""/>
                    </div>
                    <p>Confluence</p>
                </li>
                <li>
                    <div className={styles.menu_logo}>
                        <img src="https://fd-assets.prod.atl-paas.net/images/logos/trello/trello-white.svg" alt=""/>
                    </div>
                    <p>Trello</p>
                </li>
                <li>
                    <div className={styles.admin_logo}>
                        <Settings className={styles.admin_icon}/>
                    </div>
                    <p>Administration</p>
                </li>
            </ul>
        </div>
    )
}

export default Menu;