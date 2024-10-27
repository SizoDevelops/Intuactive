import { GoogleGenerativeAI } from "@google/generative-ai";
import Config from "../config";


export const  TalkToAI = async (prompt) =>  {
  try {
    const genAI = new GoogleGenerativeAI(Config.GOOGLE_MAPS_API_KEY);
    if (!genAI) {
      throw new Error("GoogleGenerativeAI instance is null");
    }
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    if (!model) {
        return "I'm unable to respond right now.";
    }


    const result = await model.generateContent(prompt);
    if (!result) {
      return "I'm unable to respond right now.";
    }

    return result.response.text();

  } catch (error) {
    console.error(error);
  }
}

