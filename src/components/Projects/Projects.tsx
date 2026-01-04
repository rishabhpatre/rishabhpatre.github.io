"use client";

import React from "react";
import { MoveUpRight, Zap, TrendingUp, Clock, Globe } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
    {
        title: "Skechers",
        metric: "2 Weeks → 2 Hours",
        label: "Delivery Lead Time",
        desc: "Reduced delivery lead time resulting in 20% increase in website sales.",
        icon: <Clock size={24} />,
        color: "blue"
    },
    {
        title: "Swiggy Instamart",
        metric: "New Launch",
        label: "B2B Operations",
        desc: "Launched B2B Operations for Swiggy Instamart, enabling hyperlocal grocery delivery.",
        icon: <Zap size={24} />,
        color: "orange"
    },
    {
        title: "Nykaa",
        metric: "700X Growth",
        label: "Scaling Operations",
        desc: "Implemented OMS and POS solution driving massive scale within first four years.",
        icon: <TrendingUp size={24} />,
        color: "pink"
    },
    {
        title: "EigerIndo",
        metric: "Cross Border",
        label: "Market Expansion",
        desc: "Enabled Indonesian brand to sell and fulfill cross border via marketplaces across SEA.",
        icon: <Globe size={24} />,
        color: "green"
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Impact Highlights</h2>
                    <p className={styles.subheading}>Key milestones and project successes.</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={`${styles.card} ${styles[project.color]}`}>
                            <div className={styles.iconWrapper}>
                                {project.icon}
                            </div>
                            <div className={styles.metric}>{project.metric}</div>
                            <div className={styles.label}>{project.label}</div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.desc}>{project.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
