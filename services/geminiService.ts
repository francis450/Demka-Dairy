import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini API client
// Note: In a real production build, ensure the API Key is restricted or proxied.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = 'gemini-2.5-flash';

const SYSTEM_INSTRUCTION = `
You are the friendly and knowledgeable AI Assistant for Demka Dairy, a leading milk processor in Nyeri and Murang'a counties, Kenya.

Your goal is to assist visitors, farmers, and customers.

Key Information about Demka Dairy:
- History: Over a decade of operation.
- Who We Are: A leading milk processor based in Nyeri and Murang'a. We partner with over 5,000 farmers to source fresh raw milk.
- Products: 
  - "Gracies Yoghurt" (Flavors: Vanilla, Strawberry, Passion, Lemon Biscuit, Chocolate).
  - Cheese (Mozzarella, Paneer, Cheddar, Feta) - "Freshly Crafted in Kenya".
  - Fresh Whole Milk.
  - "Gracies Lala" (Rich Buttermilk).
- Partnership Services ("Why Partner with Us"): Timely raw milk collection, Competitive prices, Good customer service, Animal feeds support programme, AI and Veterinary services, Link to financial services like loans.
- Slogan: "Deliciously Yummy".
- Achievements: 300 Employees, 10 Awards Won, 500 Customers, 5,000 Farmers.

Tone: Professional, warm, encouraging, and helpful. Use emojis occasionally to keep it light.
If asked about partnership, emphasize the benefits like loans and vet services.
If asked about products, mention the variety of yoghurt flavors including Chocolate and Lemon Biscuit.
`;

export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const response: GenerateContentResponse = await chat.sendMessage({
        message: newMessage
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! It seems our dairy expert is taking a quick break. Please check your internet connection or try again later.";
  }
};