"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.content}
                >
                    <span className={styles.label}>Product Manager L3 - Growth</span>
                    <h1 className={styles.title}>
                        Driving Growth & <br />
                        <span className={styles.highlight}>Customer Satisfaction.</span>
                    </h1>

                    <div className={styles.bio}>
                        <p>
                            6+ years of experience building products that scale. Proficient in crafting strategy
                            with a focus on <strong>UX, SEO, AI, and Data Analytics</strong>.
                        </p>
                        <p className={styles.secondaryBio}>
                            Expertise in E/Q-commerce, Omnichannel Retail, Logistics, and Warehousing,
                            working closely with global brands.
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <a href="mailto:email@example.com" className={styles.primaryBtn}>
                            Get in Touch
                        </a>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialLink}><Github size={20} /></a>
                            <a href="#" className={styles.socialLink}><Mail size={20} /></a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown size={24} className={styles.arrow} />
            </motion.div>
        </section>
    );
};

export default Hero;
