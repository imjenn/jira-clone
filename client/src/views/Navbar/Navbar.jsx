import React from 'react';
import styles from './Navbar.module.css';
import logo from './jira.png';
import { AppsOutlined, KeyboardArrowDown, Settings, Notifications, Help } from '@material-ui/icons'
import LeftNav from '../LeftNav/LeftNav';

const Navbar = () => {
    return (
        <header>
            <nav>
                <AppsOutlined className={styles.waffle_menu}/>
                <img src={logo} alt="Jira logo" />
                <ul>
                    <li>
                        Your Work <KeyboardArrowDown />
                    </li>
                    <li>
                        Projects <KeyboardArrowDown />
                    </li>
                    <li>
                        Filters <KeyboardArrowDown />
                    </li>
                    <li>
                        Dashboards <KeyboardArrowDown />
                    </li>
                    <li>
                        People <KeyboardArrowDown />
                    </li>
                    <li>
                        Plans <KeyboardArrowDown />
                    </li>
                    <li>
                        Apps <KeyboardArrowDown />
                    </li>
                    <li>
                        <a className={styles.btn} href="">Create</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.right_nav}>
                <input type="text" placeholder="Search" />
                <Notifications />
                <Help />
                <Settings className={styles.cog_icon}/>
            </div>
            {/* <LeftNav /> */}
        </header>
    )
}

export default Navbar;