"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    { name: "Skechers Delivery Opt.", desc: "Reduced lead time to 2hrs" },
    { name: "Swiggy Instamart B2B", desc: "Launched hyperlocal ops" },
    { name: "Nykaa POS scaling", desc: "Driven 700x growth" },
];

const ProjectsCard = () => {
    return (
        <div className="bento-card" style={{ gridArea: "projects" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h2>Missions</h2>
                <ArrowUpRight size={18} color="#9ca3af" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {projects.map((p, i) => (
                    <div key={i} style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "0.5rem" }}>
                        <h3 style={{ fontSize: "0.95rem" }}>{p.name}</h3>
                        <p style={{ fontSize: "0.85rem" }}>{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsCard;
