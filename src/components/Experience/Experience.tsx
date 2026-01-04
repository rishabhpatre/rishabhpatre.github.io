"use client";

import React from "react";
import styles from "./Experience.module.css";

const experienceData = [
    {
        role: "Product Manager L3 - Growth",
        company: "JustDial Ltd.",
        period: "Feb’22 – Present",
        points: [
            "Responsible for cross-platform product growth strategy to increase user traffic and leads.",
            "Pioneered initiatives resulting in 20% increase in daily visits (6M+ daily).",
            "Enhanced UX and content using AI: summarization, image classification, and multi-language support.",
            "Launched non-regional B2B Results pages, increasing Google user visits by 100%.",
            "Added lead generating avenues contributing to 50% increase in click on lead CTAs.",
            "Launched JD Shopping, an open quick commerce platform for local retailers.",
            "Recognized with Top Impactor award for outstanding performance."
        ]
    },
    {
        role: "Product Manager - Omnichannel Retail",
        company: "Vinculum Solutions Pvt. Ltd.",
        period: "Mar’19 – Feb’22",
        points: [
            "Managed product roadmap for OMS, Seller Panel, and Endless Aisle App.",
            "Launched new generation OMS, increasing Net Promoter Score from 8.2 to 22.4.",
            "Maintained product backlog and managed sprints aligned with product goals.",
            "Consulted retail brands on best practices in omnichannel and warehousing."
        ]
    },
    {
        role: "Business Analyst - Enterprise",
        company: "Vinculum Solutions Pvt. Ltd.",
        period: "Apr’18 – Mar’19",
        points: [
            "Analyzed gaps and identified business requirements for enterprise clients.",
            "Accountable for end-to-end completion from Requirement Gathering to Go-Live.",
            "Awarded Star of the Quarter for delivering successful global projects."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Professional Experience</h2>
                <div className={styles.timeline}>
                    {experienceData.map((exp, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.markerColumn}>
                                <div className={styles.marker} />
                                {index !== experienceData.length - 1 && <div className={styles.line} />}
                            </div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <div className={styles.meta}>
                                        <span className={styles.company}>{exp.company}</span>
                                        <span className={styles.dot}>•</span>
                                        <span className={styles.period}>{exp.period}</span>
                                    </div>
                                </div>
                                <ul className={styles.points}>
                                    {exp.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
