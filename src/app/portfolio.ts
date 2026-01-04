export interface Project {
    id: string;
    code: string;
    title: string;
    description: string;
    color: string;
    badge: string;
    type?: string;
}

export interface PortfolioData {
    profile: {
        name: string;
        role: string;
        email: string;
        phone: string;
        linkedin?: string;
        github?: string;
        avatar: string;
    };
    summary: string[];
    experience: {
        id: string;
        role: string;
        company: string;
        period: string;
        status: string;
        description: string;
        logo?: string;
    }[];
    aiProjects: Project[];
    onsiteProjects: Project[];
    rolesDetails: {
        role: string;
        company: string;
        period: string;
        points: string[];
    }[];
    mantra: string;
    skills: string[];
    education: {
        degree: string;
        school: string;
        status: string;
        icon?: string;
    }[];
    certifications: {
        name: string;
        issuer: string;
    }[];
    tools: {
        name: string;
        icon: string;
        color: string;
    }[];
    caseStudy: {
        title: string;
        description: string;
        image?: string;
        stats: {
            value: string;
            label: string;
        }[];
    };
}
