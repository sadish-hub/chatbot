import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import Description from "./components/Description/Description";

const config = {
    botName: "AMP Helper",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to know?", {
            widget: "learningOptions",
        }),
    ],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "AODescriptionLinks",
            widgetFunc: (props) => <Description {...props} />,
            props: {
                title: "eSign(Docusign)",
                description: [
                    "An agreement with DocuSign will allow Fidelity Investments to offer up the capability of its agents to open and funding brokerage accounts online through secured digital signatures.",
                    "According to Fidelity, their advisors will collect new client data through a CRM application to pre-populate form fields. Once all forms have been e-signed by the client, says Fidelity, the advisor can download and forward the forms electronically to Fidelity for account opening and funding, which will automatically generate an account number.",
                    "Advisors can track the progress and status of the transactions through electronic notifications, as well. Fidelity has been piloting the e-signature capability, including its advisor clients with the Retirement Corporation of America."
                ]
            }
        },
        {
            widgetName: "AOLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Goal Calculator",
                        url: "https://frontendmasters.com",
                        id: 1,
                    },
                    {
                        text: "Risk Tolerance Questionaire",
                        url:
                            "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                        id: 2,
                    },
                    {
                        text: "Model and the securities",
                        url:
                            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                        id: 3,
                    },
                    {
                        text: "Docusign",
                        url: "https://frontendmasters.com",
                        desc: "Docusign",
                        id: 4,
                    }
                ],
            }
        },
    ],
}

export default config