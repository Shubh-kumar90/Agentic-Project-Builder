const { ChatGoogleGenerativeAI } =
require("@langchain/google-genai");

async function generateSQL(projectIdea) {

    const model =
        new ChatGoogleGenerativeAI({
            model: "gemini-2.0-flash",
            apiKey: process.env.GEMINI_API_KEY
        });

    const prompt = `
Generate MySQL CREATE TABLE statements.

Project:
${projectIdea}

Only return SQL.
`;

    const result =
        await model.invoke(prompt);

    return result.content;
}

module.exports = {
    generateSQL
};