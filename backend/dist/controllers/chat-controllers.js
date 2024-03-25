import User from "../models/User.js";
export const generateChatComplation = async (req, res, next) => {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
        return res.status(401).json({ message: "User not registered or Token malfunctioned..." });
    }
    //grab chats of the user
    //send all chats with new one to openAI API
    //get latest response
};
//# sourceMappingURL=chat-controllers.js.map