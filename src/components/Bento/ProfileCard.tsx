"use client";

import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ProfileCard = () => {
    return (
        <div className="bento-card" style={{ gridArea: "profile" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{
                    width: "60px", height: "60px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #ddd, #eee)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    <span style={{ fontSize: "1.5rem" }}>👨‍💻</span>
                </div>
                <div>
                    <h1>Product Manager</h1>
                    <p style={{ fontSize: "0.9rem" }}>L3 - Growth @ JustDial</p>
                </div>
            </div>

            <p style={{ marginBottom: "1.5rem", flexGrow: 1 }}>
                Driving growth & customer satisfaction with 6+ years of specialized experience in
                <strong> UX, AI, and Data Analytics</strong>.
            </p>

            <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
                <button style={{
                    padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid #ddd",
                    background: "white", cursor: "pointer", flex: 1
                }}>
                    Resume
                </button>
                <button style={{
                    padding: "0.5rem 1rem", borderRadius: "8px", border: "none",
                    background: "black", color: "white", cursor: "pointer", flex: 1
                }}>
                    Contact
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
