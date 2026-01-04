"use client";

import React from "react";
import { TrendingUp, Users, Zap, Globe } from "lucide-react";

const stats = [
    { label: "Daily Visits", val: "6M+", icon: <Users size={16} /> },
    { label: "Growth", val: "20%", icon: <TrendingUp size={16} /> },
    { label: "Revenue", val: "₹5.6M", icon: <Zap size={16} /> },
    { label: "Scale", val: "700X", icon: <Globe size={16} /> },
];

const ImpactCard = () => {
    return (
        <div className="bento-card" style={{ gridArea: "impact", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {stats.map((s, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#f9fafb", borderRadius: "12px", padding: "1rem" }}>
                    <span style={{ color: "#2563eb", marginBottom: "0.5rem" }}>{s.icon}</span>
                    <span style={{ fontSize: "1.5rem", fontWeight: "800", color: "#111827" }}>{s.val}</span>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#6b7280", marginTop: "0.25rem" }}>{s.label}</span>
                </div>
            ))}
        </div>
    );
};

export default ImpactCard;
