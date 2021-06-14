class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, Please pick one of the above to know more!")
        this.updateChatbotState(greetingMessage)
    }

    handleAccountOpeningList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Account Opening:",
            {
                widget: "AOLinks",
            }
        );

        this.updateChatbotState(message);
    };

    handleAODescription = (desc) => {
        const message = this.createChatBotMessage(
            `More details about ${desc}:`,
            {
                widget: "AODescriptionLinks",
            }
        );

        this.updateChatbotState(message);
    };

    updateChatbotState(message) {

        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider