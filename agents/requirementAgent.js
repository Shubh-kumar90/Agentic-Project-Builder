const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

async function generateRequirements(projectIdea) {

    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash",
        apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are a software analyst.

Project:
${projectIdea}

Generate:

1. Actors
2. Features
3. Functional Requirements
4. Non Functional Requirements
`;

    const result = await model.invoke(prompt);

    return result.content;
}

module.exports = {
    generateRequirements
};