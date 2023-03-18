import React from "react";
import ButtonApp from "./Button";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {

    const [menuExpanded, setMenuExpanded] = useState(false);

    const expandMenu = () => {
        setMenuExpanded(!menuExpanded);

        if (!menuExpanded) {

            document.getElementsByClassName(styles.bar1)[0].style.transform = 'translate(0, 11px) rotate(-45deg)';
            document.getElementsByClassName(styles.bar2)[0].style.opacity = '0';
            document.getElementsByClassName(styles.bar3)[0].style.transform = 'translate(0, -11px) rotate(45deg)';
            } else {
            document.getElementsByClassName(styles.bar1)[0].style.transform = 'translate(0, 0) rotate(0)';
            document.getElementsByClassName(styles.bar2)[0].style.opacity = '1';
            document.getElementsByClassName(styles.bar3)[0].style.transform = 'translate(0, 0) rotate(0)';
        }
    }





    return (
        <>
            <nav>
                <div className={styles.flexrow}>
                    <a href="/"><img src="/logo_symbol_color.ico" alt="Found Logo" className={styles.logo} /></a>
                    <ul id="nav-mobile" className={styles.navigation}>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/screening" id={styles.button}><ButtonApp name='Report'/></a></li>
                    </ul>
                    <div className={styles.hamburgermenu} onClick={expandMenu}>
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </div>
                </div>
            </nav>
            {menuExpanded ? (
                <div className={styles.overlay}>
                    <div className={styles.mobilemenu}>
                        <ul>
                            <li onClick={expandMenu}>Home</li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/screening"><ButtonApp name='Report'/></a></li>
                        </ul>
                    </div>
                </div>
            ) : null}
        </>
    )
}
                
