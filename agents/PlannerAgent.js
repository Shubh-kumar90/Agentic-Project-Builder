const { ChatGoogleGenerativeAI } =
require("@langchain/google-genai");

async function createPlan(userRequest) {

    const model =
        new ChatGoogleGenerativeAI({
            model: "gemini-2.0-flash",
            apiKey: process.env.GEMINI_API_KEY
        });

    const prompt = `
You are an AI Planner.

Analyze the user's request.

Return ONLY valid JSON.

Format:

{
  "requirements": true,
  "database": true,
  "apis": true,
  "architecture": true
}

User Request:
${userRequest}
`;

    const result =
        await model.invoke(prompt);

    return result.content;
}

module.exports = {
    createPlan
};