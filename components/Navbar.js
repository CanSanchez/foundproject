import React from "react";
import ButtonApp from "./Button";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <div className={styles.flexrow}>
                <a href="/"><img src="/logo_symbol_color.ico" alt="Found Logo" className={styles.logo} /></a>
                <ul id="nav-mobile" className={styles.navigation}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/screening" id={styles.button}><ButtonApp name='Report'/></a></li>
                </ul>
            </div>
        </nav>
    )
}
                
