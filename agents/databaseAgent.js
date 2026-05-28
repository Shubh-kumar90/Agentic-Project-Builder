const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

async function generateDatabase(projectIdea) {

    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.5-flash",
        apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are a database architect.

Project:
${projectIdea}

Generate:

1. Tables
2. Attributes
3. Primary Keys
4. Foreign Keys
5. Relationships

Output in MySQL format.
`;

    const result = await model.invoke(prompt);

    return result.content;
}

module.exports = {
    generateDatabase
};