"use client";

import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className="container">
            {/* Navbar */}
            <nav style={{ padding: "1rem 0", borderBottom: "1px solid var(--border-light)", marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "2rem", height: "2rem", background: "var(--primary)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>dataset</span>
                    </div>
                    <span style={{ fontWeight: "700", fontSize: "1.125rem" }}>Rishabh Patre</span>
                </div>
                <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", fontWeight: "500", color: "var(--text-muted)" }}>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                </div>
                <a href="#" className={styles.primaryBtn}>
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>download</span> Resume
                </a>
            </nav>

            {/* Main Grid */}
            <div className={styles.grid}>

                {/* Profile Card */}
                <div className={`${styles.card} ${styles.colSpan8}`} style={{ flexDirection: "row", alignItems: "center", gap: "1.5rem" }} id="about">
                    <div className={styles.profileImage} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbG2OLLupaC8q-tEym8gGr7gYtwaFlRE_sJOyxd7MokD-Jy_X9-07myAkoYyLPs3SgU1vi9pcdEFVJFqK7sp3q8TTjV2qSZOZaCawg6uz2UaajwArn2Sa8Es-3wjwR2-ft0mGKBQU0hP-YuchaydH9rnrlokZyz7OrWEC-BBPOnAJqi01CZu2xCxwudF8ZrEzAb71YG1Q2En4S6cz67BY0NTVn2edELgnvOkt03kX2UwYba0mn3JZsAhHAxuPo5fJ3LVXEHY0v_hc')" }}></div>
                    <div style={{ flex: 1 }}>
                        <h1 className={styles.h1}>Hi, I'm Rishabh Patre.</h1>
                        <p className={styles.textMuted} style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>Product Manager & Business Analyst</p>

                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            <button className={styles.tag}><span className="material-symbols-outlined" style={{ marginRight: "0.5rem", fontSize: "18px" }}>mail</span> Email</button>
                            <button className={styles.tag}><span className="material-symbols-outlined" style={{ marginRight: "0.5rem", fontSize: "18px" }}>call</span> Phone</button>
                            <button className={styles.tag}><span className="material-symbols-outlined" style={{ marginRight: "0.5rem", fontSize: "18px" }}>globe</span> Portfolio</button>
                        </div>
                    </div>
                </div>

                {/* Professional Summary */}
                <div className={`${styles.card} ${styles.colSpan4}`}>
                    <h2 className={styles.h2}>
                        <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>summarize</span>
                        Professional Summary
                    </h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li className={styles.textSmall} style={{ display: "flex", gap: "0.5rem" }}>
                            <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "16px", marginTop: "2px" }}>check_small</span>
                            Experienced Product Manager specializing in B2B SaaS and e-commerce solutions.
                        </li>
                        <li className={styles.textSmall} style={{ display: "flex", gap: "0.5rem" }}>
                            <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "16px", marginTop: "2px" }}>check_small</span>
                            Proven expertise in product lifecycle management from concept to launch.
                        </li>
                        <li className={styles.textSmall} style={{ display: "flex", gap: "0.5rem" }}>
                            <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "16px", marginTop: "2px" }}>check_small</span>
                            Strong background in data analytics, requirement gathering, and stakeholder management.
                        </li>
                    </ul>
                </div>

                {/* Experience Timeline */}
                <div className={`${styles.card} ${styles.colSpan4}`} id="experience">
                    <h2 className={styles.h2}>Professional Experience</h2>
                    <div style={{ position: "relative", marginTop: "1rem" }}>
                        <div className={styles.timelineLine}></div>

                        {/* Job 1 */}
                        <div className={styles.timelineItem}>
                            <div style={{ position: "absolute", left: "0", top: "0", zIndex: 10, background: "white", borderRadius: "50%", border: "2px solid var(--primary)" }}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "var(--text-muted)" }}>inventory_2</span>
                                </div>
                            </div>
                            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase" }}>Present</span>
                            <h3 className={styles.h3}>Product Manager - Omnichannel</h3>
                            <p className={styles.textSmall} style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Vinculum Solutions Pvt. Ltd.</p>
                            <p className={styles.textSmall}>Managing product roadmap for omnichannel retail SaaS. Leading integrations with major marketplaces.</p>
                        </div>

                        {/* Job 2 */}
                        <div className={styles.timelineItem}>
                            <div style={{ position: "absolute", left: "0", top: "0", zIndex: 10, background: "white", borderRadius: "50%", border: "2px solid var(--border-light)" }}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "var(--text-muted)" }}>analytics</span>
                                </div>
                            </div>
                            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--text-light)", textTransform: "uppercase" }}>Previous</span>
                            <h3 className={styles.h3}>Business Analyst - Enterprise</h3>
                            <p className={styles.textSmall} style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Vinculum Solutions Pvt. Ltd.</p>
                            <p className={styles.textSmall}>Conducted detailed requirement gathering, created BRD/FRDs, and optimized operational workflows.</p>
                        </div>

                        {/* Job 3 */}
                        <div className={styles.timelineItem}>
                            <div style={{ position: "absolute", left: "0", top: "0", zIndex: 10, background: "white", borderRadius: "50%", border: "2px solid var(--border-light)" }}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "var(--text-muted)" }}>apartment</span>
                                </div>
                            </div>
                            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--text-light)", textTransform: "uppercase" }}>Previous</span>
                            <h3 className={styles.h3}>Product Manager L3</h3>
                            <p className={styles.textSmall} style={{ fontWeight: "500", marginBottom: "0.25rem" }}>JustDial Ltd.</p>
                            <p className={styles.textSmall}>Contributed to business development and client relationship management initiatives.</p>
                        </div>
                    </div>
                </div>

                {/* Noteworthy Projects */}
                <div className={`${styles.card} ${styles.colSpan8}`} id="projects">
                    <h2 className={styles.h2}>
                        <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>rocket_launch</span>
                        Noteworthy Projects
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        {/* Skechers */}
                        <div style={{ padding: "1rem", background: "var(--bg-light)", borderRadius: "0.75rem", border: "1px solid var(--border-light)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <span style={{ background: "#fefce8", color: "var(--primary)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: "700" }}>SK</span>
                                <h3 style={{ fontSize: "0.875rem", fontWeight: "700" }}>Skechers</h3>
                            </div>
                            <p className={styles.textSmall}>Led omnichannel inventory system implementation, streamlining operations.</p>
                        </div>
                        {/* Swiggy */}
                        <div style={{ padding: "1rem", background: "var(--bg-light)", borderRadius: "0.75rem", border: "1px solid var(--border-light)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <span style={{ background: "#ffedd5", color: "#c2410c", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: "700" }}>SW</span>
                                <h3 style={{ fontSize: "0.875rem", fontWeight: "700" }}>Swiggy</h3>
                            </div>
                            <p className={styles.textSmall}>Managed API integrations for real-time order processing and tracking.</p>
                        </div>
                        {/* Nykaa */}
                        <div style={{ padding: "1rem", background: "var(--bg-light)", borderRadius: "0.75rem", border: "1px solid var(--border-light)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <span style={{ background: "#fce7f3", color: "#db2777", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: "700" }}>NY</span>
                                <h3 style={{ fontSize: "0.875rem", fontWeight: "700" }}>Nykaa</h3>
                            </div>
                            <p className={styles.textSmall}>Optimized inventory sync logic reducing overselling significantly.</p>
                        </div>
                        {/* EigerIndo */}
                        <div style={{ padding: "1rem", background: "var(--bg-light)", borderRadius: "0.75rem", border: "1px solid var(--border-light)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <span style={{ background: "#dcfce7", color: "#16a34a", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: "700" }}>EI</span>
                                <h3 style={{ fontSize: "0.875rem", fontWeight: "700" }}>EigerIndo</h3>
                            </div>
                            <p className={styles.textSmall}>Delivered localized fulfillment solution for Indonesian market.</p>
                        </div>
                    </div>
                </div>

                {/* Roles Details */}
                <div className={`${styles.card} ${styles.colSpan12}`}>
                    <h2 className={styles.h2}>
                        <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>description</span>
                        Role & Responsibilities
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
                        {/* Role 1 */}
                        <div>
                            <h4 style={{ fontWeight: "700", marginBottom: "0.25rem" }}>Product Manager - Omnichannel</h4>
                            <p className={styles.textSmall} style={{ color: "var(--primary)", fontWeight: "600", marginBottom: "1rem" }}>Vinculum Solutions</p>
                            <ul className={styles.textSmall} style={{ listStyle: "inside", padding: 0 }}>
                                <li style={{ marginBottom: "0.5rem" }}>Spearheaded 15+ marketplace integrations (Amazon, Flipkart).</li>
                                <li style={{ marginBottom: "0.5rem" }}>Reduced order processing time by 25%.</li>
                                <li>Launched returns module improving CSAT by 15%.</li>
                            </ul>
                        </div>
                        {/* Role 2 */}
                        <div style={{ borderLeft: "1px solid var(--border-light)", paddingLeft: "1rem" }}>
                            <h4 style={{ fontWeight: "700", marginBottom: "0.25rem" }}>Business Analyst</h4>
                            <p className={styles.textSmall} style={{ color: "var(--primary)", fontWeight: "600", marginBottom: "1rem" }}>Vinculum Solutions</p>
                            <ul className={styles.textSmall} style={{ listStyle: "inside", padding: 0 }}>
                                <li style={{ marginBottom: "0.5rem" }}>Analyzed requirements with 95% deployment success.</li>
                                <li style={{ marginBottom: "0.5rem" }}>Conducted gap analysis for automation.</li>
                                <li>Facilitated UAT sessions for client adoption.</li>
                            </ul>
                        </div>
                        {/* Role 3 */}
                        <div style={{ borderLeft: "1px solid var(--border-light)", paddingLeft: "1rem" }}>
                            <h4 style={{ fontWeight: "700", marginBottom: "0.25rem" }}>Product Manager L3</h4>
                            <p className={styles.textSmall} style={{ color: "var(--primary)", fontWeight: "600", marginBottom: "1rem" }}>JustDial Ltd.</p>
                            <ul className={styles.textSmall} style={{ listStyle: "inside", padding: 0 }}>
                                <li style={{ marginBottom: "0.5rem" }}>Managed vertical search products, +20% engagement.</li>
                                <li style={{ marginBottom: "0.5rem" }}>Defined GTM strategies with sales teams.</li>
                                <li>Conducted market research for differentiation.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mantra */}
                <div className={`${styles.card} ${styles.colSpan2}`} style={{ background: "linear-gradient(to bottom right, var(--primary), #8c4018)", color: "white" }}>
                    <span className="material-symbols-outlined" style={{ opacity: 0.2, fontSize: "4rem", position: "absolute", top: "1rem", right: "1rem" }}>format_quote</span>
                    <h3 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.9, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>lightbulb</span> My Mantra
                    </h3>
                    <p style={{ fontSize: "1.25rem", fontWeight: "700", lineHeight: "1.4", position: "relative", zIndex: 2 }}>
                        "Empowering users through simple, data-driven solutions that drive real business impact."
                    </p>
                </div>

                {/* Skills */}
                <div className={`${styles.card} ${styles.colSpan2}`}>
                    <h2 className={styles.h2}>
                        <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>psychology</span>
                        Key Skills
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {["Product Strategy", "Agile & Scrum", "User Research", "Data Analytics", "Roadmapping", "Stakeholder Mgmt"].map(s => (
                            <span key={s} className={styles.tag}>{s}</span>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className={`${styles.card} ${styles.colSpan2}`} id="education">
                    <h2 className={styles.h2}>
                        <span className="material-symbols-outlined" style={{ color: "var(--text-light)" }}>school</span>
                        Education
                    </h2>
                    <div>
                        <div style={{ marginBottom: "1rem" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontWeight: "700" }}>MBA</span>
                                <span style={{ fontSize: "10px", background: "#dcfce7", color: "#16a34a", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>GRADUATED</span>
                            </div>
                            <span className={styles.textSmall}>IIM Rohtak</span>
                        </div>
                        <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "1rem" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontWeight: "700" }}>Bachelor of Engineering</span>
                                <span style={{ fontSize: "10px", background: "#dcfce7", color: "#16a34a", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>GRADUATED</span>
                            </div>
                            <span className={styles.textSmall}>GHRCE</span>
                        </div>
                    </div>
                </div>

                {/* Certs & Tools (Grouped in bottom row to match 12 cols) */}
                <div className={`${styles.card} ${styles.colSpan2}`}>
                    <h2 className={styles.h2}>
                        <span className="material-symbols-outlined" style={{ color: "#eab308" }}>workspace_premium</span>
                        Certifications
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem", background: "var(--bg-light)", borderRadius: "0.5rem" }}>
                            <span className="material-symbols-outlined" style={{ color: "#22c55e", fontSize: "18px" }}>verified</span>
                            <div>
                                <div style={{ fontSize: "0.875rem", fontWeight: "700" }}>PSPO</div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>Scrum.org</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem", background: "var(--bg-light)", borderRadius: "0.5rem" }}>
                            <span className="material-symbols-outlined" style={{ color: "#22c55e", fontSize: "18px" }}>verified</span>
                            <div>
                                <div style={{ fontSize: "0.875rem", fontWeight: "700" }}>Datacamp</div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>Analytics</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.colSpan8}`}>
                    <h2 className={styles.h2}>
                        <span className="material-symbols-outlined" style={{ color: "var(--text-light)" }}>handyman</span>
                        Tools Stack
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span className="material-symbols-outlined" style={{ fontSize: "18px", color: "var(--primary)" }}>task_alt</span> Jira</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#f97316" }}>article</span> Confluence</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#a855f7" }}>brush</span> Figma</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#3b82f6" }}>bar_chart</span> Tableau</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#eab308" }}>analytics</span> G-Analytics</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#ca8a04" }}>sticky_note_2</span> Miro</div>
                    </div>
                </div>

                {/* Case Study */}
                <div className={`${styles.card} ${styles.colSpan12}`} style={{ flexDirection: "row", gap: "2rem", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", background: "#ffedd5", padding: "0.25rem 0.5rem", borderRadius: "999px" }}>Featured Case Study</span>
                        <h2 className={styles.h1} style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Optimizing Order Fulfillment at Vinculum</h2>
                        <p className={styles.textMuted} style={{ marginBottom: "1.5rem" }}>Deep dive into tracking logistics and reducing processing time by 40% via intelligent routing.</p>

                        <div style={{ display: "flex", gap: "2rem", marginBottom: "1.5rem" }}>
                            <div>
                                <div style={{ fontSize: "1.5rem", fontWeight: "800" }}>40%</div>
                                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-light)" }}>Faster Processing</div>
                            </div>
                            <div style={{ width: "1px", background: "var(--border-light)" }}></div>
                            <div>
                                <div style={{ fontSize: "1.5rem", fontWeight: "800" }}>15%</div>
                                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-light)" }}>Cost Reduction</div>
                            </div>
                        </div>

                        <a href="#" style={{ color: "var(--primary)", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            Read full case study <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                        </a>
                    </div>
                    <div style={{ width: "300px", height: "200px", background: "var(--bg-light)", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "64px", color: "var(--border-light)" }}>article</span>
                    </div>
                </div>

            </div>

            <footer style={{ marginTop: "4rem", padding: "2rem 0", borderTop: "1px solid var(--border-light)", textAlign: "center", color: "var(--text-light)", fontSize: "0.875rem" }}>
                © 2024 Rishabh Patre. Built with Next.js & CSS Modules.
            </footer>
        </div>
    );
};

export default Dashboard;
