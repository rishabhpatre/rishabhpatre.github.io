"use client";

import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Ready to drive growth?</h2>
                    <a href="mailto:email@example.com" className={styles.email}>email@example.com</a>

                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Product Manager Portfolio.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
