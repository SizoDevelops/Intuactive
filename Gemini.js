const Config ={
    GOOGLE_MAPS_API_KEY:"AIzaSyB-w_lAOg3rTPj8b_TvFQM_QtgEn_xEoMM"
}

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";


async function work() {
    const genAI = new GoogleGenerativeAI(Config.GOOGLE_MAPS_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a magic backpack.";

const result = await model.generateContent(prompt);
console.log(result.response.text());
}
work()
