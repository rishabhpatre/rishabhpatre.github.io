"use client";

import React from "react";

const jobs = [
    { role: "Product Manager L3 - Growth", company: "JustDial", period: "2022-Present" },
    { role: "Product Manager - Omnichannel", company: "Vinculum", period: "2019-2022" },
    { role: "Business Analyst", company: "Vinculum", period: "2018-2019" },
];

const ExperienceCard = () => {
    return (
        <div className="bento-card" style={{ gridArea: "experience", minHeight: "300px" }}>
            <h2 style={{ marginBottom: "1rem" }}>Trajectory</h2>
            <div style={{ overflowY: "auto", paddingRight: "0.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {jobs.map((job, i) => (
                    <div key={i} style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "12px" }}>
                        <h3 style={{ fontSize: "0.95rem" }}>{job.role}</h3>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.25rem", fontSize: "0.85rem", color: "#6b7280" }}>
                            <span>{job.company}</span>
                            <span>{job.period}</span>
                        </div>
                    </div>
                ))}
                <div style={{ padding: "0.75rem", background: "#f9fafb", borderRadius: "12px", opacity: 0.7 }}>
                    <h3 style={{ fontSize: "0.95rem" }}>MBA</h3>
                    <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>IIM Rohtak</span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
