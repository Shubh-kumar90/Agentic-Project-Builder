const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

async function generateApis(projectIdea) {

    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.5-flash",
        apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are a backend architect.

Project:
${projectIdea}

Generate REST APIs.

Include:

GET
POST
PUT
DELETE

Give endpoint list.
`;

    const result = await model.invoke(prompt);

    return result.content;
}

module.exports = {
    generateApis
};