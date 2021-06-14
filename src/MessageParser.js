// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }
        if (lowerCaseMessage.includes("account opening")) {
            this.actionProvider.handleAccountOpeningList();
        }
    }
}

export default MessageParser;