import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

// Initialize Gemini Client
const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (e) {
  console.warn("Gemini API not initialized:", e);
}

// Construct the system instruction with the portfolio context
const SYSTEM_INSTRUCTION = `
You are "DevBot", an AI assistant for ${PORTFOLIO_DATA.name}'s portfolio website.
Your goal is to answer visitor questions about ${PORTFOLIO_DATA.name} based strictly on the provided context.

CONTEXT:
Name: ${PORTFOLIO_DATA.name}
Title: ${PORTFOLIO_DATA.title}
Bio: ${PORTFOLIO_DATA.about}
Technical Proficiency:
- Front-End: HTML5, CSS3, JavaScript
- Back-End: Python, ASP.Net, Node.js
- Frame Works: Angular.js, React.js
- Database: MySQL, MongoDB

Experience: ${PORTFOLIO_DATA.experience.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join('; ')}
Projects: ${PORTFOLIO_DATA.projects.map(p => `${p.title}: ${p.description}`).join('; ')}

GUIDELINES:
- Be friendly, professional, and concise.
- If a user asks about something not in the context, politely suggest using the contact form.
- Use technical terminology matching the "Technical Proficiency" section.
- Keep responses under 3 sentences.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat | null => {
  if (!ai) {
    return null;
  }
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToAssistant = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
if (!chat) {
      return "AI assistant is not configured. Please set up a GEMINI_API_KEY to enable this feature.";
    }
    const result = await chat.sendMessage({ message });
    return result.text || "I'm having trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};

export const isAiConfigured = (): boolean => ai !== null
