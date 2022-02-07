import React from 'react';
import styles from './Navbar.module.css';
import logo from './jira.png';
import { AppsOutlined, KeyboardArrowDown, Settings, Notifications, Help } from '@material-ui/icons'

const Navbar = () => {
    return (
        <header>
            <nav>
                <AppsOutlined className={styles.waffle_menu}/>
                <img src={logo} alt="Jira logo" />
                <ul>
                    <li>
                        Your Work <KeyboardArrowDown className={styles.nav_arrow}/>
                    </li>
                    <li>
                        Projects <KeyboardArrowDown className={styles.nav_arrow} />
                    </li>
                    <li>
                        Filters <KeyboardArrowDown className={styles.nav_arrow} />
                    </li>
                    <li>
                        Dashboards <KeyboardArrowDown className={styles.nav_arrow} />
                    </li>
                    <li>
                        People <KeyboardArrowDown className={styles.nav_arrow} />
                    </li>
                    <li>
                        Plans <KeyboardArrowDown className={styles.nav_arrow} />
                    </li>
                    <li>
                        Apps <KeyboardArrowDown className={styles.nav_arrow} />
                    </li>
                    <li>
                        <a className={styles.btn} href="">Create</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.right_nav}>
                <input type="text" placeholder="Search" />
                <Notifications className={styles.nav_icon}/>
                <Help className={styles.nav_icon}/>
                <Settings className={styles.nav_icon}/>
            </div>
            {/* <LeftNav /> */}
        </header>
    )
}

export default Navbar;