import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatComplation } from "../controllers/chat-controllers.js";

const chatRoutes = Router()

chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatComplation)

export default chatRoutes;