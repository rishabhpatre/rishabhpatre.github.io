"use client";

import React from "react";

const skills = ["Product Strategy", "Roadmapping", "SQL", "Python", "UX/UI", "Agile", "SEO", "Analytics"];

const SkillsCard = () => {
    return (
        <div className="bento-card" style={{ gridArea: "skills" }}>
            <h2 style={{ marginBottom: "1rem" }}>Arsenal</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skills.map((s, i) => (
                    <span key={i} style={{
                        fontSize: "0.8rem", padding: "0.3rem 0.6rem",
                        background: "#eff6ff", color: "#2563eb", borderRadius: "6px", fontWeight: "500"
                    }}>
                        {s}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;
