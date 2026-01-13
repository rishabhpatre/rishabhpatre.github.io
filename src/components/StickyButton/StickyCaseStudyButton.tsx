"use client";

import React, { useEffect, useState } from "react";

export const StickyCaseStudyButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const showcaseSection = document.getElementById("showcase");
            if (!showcaseSection) return;

            const rect = showcaseSection.getBoundingClientRect();

            // Hide the button as soon as the user reaches the showcase section (or scrolls past it)
            // If the top of the section is within the viewport (e.g. less than window height - 200px buffer), hide it.
            if (rect.top < window.innerHeight - 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="#showcase"
            className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transform hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            aria-label="View Case Studies"
        >
            View Case Studies
            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
        </a>
    );
};
