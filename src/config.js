import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
            widget: "learningOptions",
        }),
    ],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
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
                        id: 4,
                    }
                ],
            }
        },
    ],
}

export default config