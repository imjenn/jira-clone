import React from 'react';
import batman from './batman.png';
import styles from './LeftNav.module.css';
import { KeyboardArrowLeft, Equalizer, ViewColumnOutlined, Code, DescriptionOutlined, AddBoxOutlined, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    return (
        <div className={styles.left_nav_container}>
            <label for="close">
                <KeyboardArrowLeft className={styles.close_nav} />
            </label>
            {/* <input className={styles.hide_nav} type="checkbox" id="close"/> */}
            <div className={styles.left_nav_header}>
                <img src={batman} alt=""/>
                <div>
                    <h1>Project Name</h1>
                    <p>Software Project</p>
                </div>
            </div>
            <h2>PLANNING</h2>
            <ul>
                <li>
                    <Equalizer className={styles.left_nav_icon} />
                    Roadmap
                </li>
                <li>
                    <ViewColumnOutlined className={styles.left_nav_icon} />
                    <Link className={styles.left_nav_link} to="/project/board">Board</Link>
                </li>
            </ul>
            <h2>DEVELOPMENT</h2>
            <ul>
                <li>
                    <Code className={styles.left_nav_icon} />
                    Code
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <DescriptionOutlined className={styles.left_nav_icon} />
                    Project pages
                </li>
                <li>
                    <AddBoxOutlined className={styles.left_nav_icon} />
                    Add shortcut
                </li>
                <li>
                    <Settings  className={styles.left_nav_icon}/>
                    Project Settings
                </li>
            </ul>
            <div className={styles.left_nav_footer}>
                You're in a team-managed project<br/>
                <a href="">Learn more</a>
            </div>
        </div>
    )
}

export default LeftNav;