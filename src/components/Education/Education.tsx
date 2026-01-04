"use client";

import React from "react";
import styles from "./Education.module.css";
import { GraduationCap, Award } from "lucide-react";

const education = [
    {
        degree: "MBA (2016-18)",
        school: "IIM Rohtak",
        icon: <GraduationCap size={20} />
    },
    {
        degree: "Bachelor of Engineering",
        school: "GHRCE, Nagpur",
        icon: <GraduationCap size={20} />
    },
    {
        degree: "Professional Scrum Product Owner (PSPO)",
        school: "Scrum.org",
        icon: <Award size={20} />
    },
    {
        degree: "Certified in R, SQL and Python",
        school: "Datacamp (USA)",
        icon: <Award size={20} />
    }
];

const Education = () => {
    return (
        <section id="education" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Education & Certifications</h2>
                <div className={styles.grid}>
                    {education.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.icon}>{item.icon}</div>
                            <div>
                                <h3 className={styles.degree}>{item.degree}</h3>
                                <p className={styles.school}>{item.school}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
