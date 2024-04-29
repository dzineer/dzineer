import React, { useEffect, useState } from 'react';

const DzineerContext = React.createContext();

const DzineerProvider = ({ children }) => {
    const [dzineerState, setDzineerState] = useState({
        name: "Frank",
        model: ["Automations", "AI", "Design"],
        research: ["AI", "AI Automations", "Software Architect, Emphasis AI & Automations"],
        interest: ["Entrepreneurship", "IP", "VC Methods"]
    });

    useEffect(() => {
        // Perform any side effects or data fetching here
    }, []);

    return (
        <DzineerContext.Provider value={dzineerState}>
            {children}
        </DzineerContext.Provider>
    );
};

const Dzineer = () => {
    const dzineerState = React.useContext(DzineerContext);

    return (
        <div>
            <img src="https://img.shields.io/badge/AI-AI-informational?style=flat&logo=ai&logoColor=white&color=6aa6f8" alt="AI Badge" />
            <p>Name: {dzineerState.name}</p>
            <p>Model: {dzineerState.model.join(', ')}</p>
            <p>Research: {dzineerState.research.join(', ')}</p>
            <p>Interest: {dzineerState.interest.join(', ')}</p>
        </div>
    );
}

export { DzineerProvider, Dzineer };
