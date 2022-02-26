import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from './jira.png';
import { AppsOutlined, KeyboardArrowDown, Settings, Notifications, Help } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import Menu from './Menu';

const Navbar = () => {
    const [waffleMenu, setWaffleMenu] = useState(false);

    const openMenu = () => {
        if (waffleMenu === false) {
            setWaffleMenu(true);
            console.log("true")
        } else {
            setWaffleMenu(false);
            console.log("false")
        }
    }

    return (
        <>
            <header>
                <nav>
                    <AppsOutlined className={styles.waffle_menu} onClick={openMenu} />

                    <img src={logo} alt="Jira logo" />
                    <ul>
                        <li>
                            Your Work <KeyboardArrowDown className={styles.nav_arrow} />
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
                    <Notifications className={styles.nav_icon} />
                    <Help className={styles.nav_icon} />
                    <Settings className={styles.nav_icon} />
                    <Avatar
                        alt="Yoda"
                        src="/static/images/avatar/1.jpg"
                        className={styles.nav_icon_yoda}
                    />
                </div>
            </header>
            { waffleMenu && <Menu />}
        </>
    )
}

export default Navbar;