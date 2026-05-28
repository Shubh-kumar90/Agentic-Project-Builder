const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

async function generateArchitecture(projectIdea) {

    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.5-flash",
        apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are a software architect.

Project:
${projectIdea}

Generate:

1. Folder Structure
2. Technology Stack
3. Backend Design
4. Frontend Design
`;

    const result = await model.invoke(prompt);

    return result.content;
}

module.exports = {
    generateArchitecture
};