"use client";

import React from "react";
import styles from "./Skills.module.css";

const skillCategories = [
    {
        category: "Product Management",
        skills: ["Product Strategy", "Roadmapping", "Agile/Scrum", "UX Design", "Stakeholder Mgmt"]
    },
    {
        category: "Technical & Data",
        skills: ["SQL", "Python", "R", "Data Analytics", "A/B Testing", "SEO"]
    },
    {
        category: "Domain Expertise",
        skills: ["E-commerce", "Omnichannel Retail", "Logistics", "Warehousing", "Quick Commerce"]
    },
    {
        category: "Tools",
        skills: ["JIRA", "Figma", "Datacamp", "Google Analytics"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Skills & Expertise</h2>
                <div className={styles.grid}>
                    {skillCategories.map((cat, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <h3 className={styles.categoryTitle}>{cat.category}</h3>
                            <div className={styles.flex}>
                                {cat.skills.map((skill, idx) => (
                                    <span key={idx} className={styles.badge}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
