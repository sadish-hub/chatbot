import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "Account Opening",
            handler: props.actionProvider.handleAccountOpeningList,
            id: 1,
        },
        { text: "Money Movement", handler: () => { }, id: 2 },
        { text: "Transfer Of Assets", handler: () => { }, id: 3 },
        { text: "Brokerage Vault", handler: () => { }, id: 4 },
        { text: "Accounts", handler: () => { }, id: 5 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;