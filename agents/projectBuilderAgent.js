const {
    generateRequirements
} = require("./requirementAgent");

const {
    generateDatabase
} = require("./databaseAgent");

const {
    generateApis
} = require("./apiAgent");

const {
    generateArchitecture
} = require("./architectureAgent");

const {
    generateSQL
} = require("./sqlAgent");

const {
    saveFile
} = require("../tools/fileTool");

const db = require("../config/db");

async function buildProject(projectIdea) {
let requirements = null;
let database = null;
let apis = null;
let architecture = null;

if (plan.requirements) {

    requirements =
        await generateRequirements(
            projectIdea
        );
}

if (plan.database) {

    database =
        await generateDatabase(
            projectIdea
        );
}

if (plan.apis) {

    apis =
        await generateApis(
            projectIdea
        );
}

if (plan.architecture) {

    architecture =
        await generateArchitecture(
            projectIdea
        );
}
    
    const planText =
    await createPlan(projectIdea);

const plan =
    JSON.parse(planText);
const {
    createPlan
} = require("./plannerAgent");
    // Save SQL file
    saveFile(
        "database.sql",
        sql
    );

    // Save project in MySQL
    db.query(
        `
        INSERT INTO projects
        (
            project_name,
            requirements,
            database_design,
            api_design,
            architecture
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            projectIdea,
            requirements,
            database,
            apis,
            architecture
        ],
        (err) => {
            if (err) {
                console.error(
                    "Error saving project:",
                    err
                );
            } else {
                console.log(
                    "Project saved successfully"
                );
            }
        }
    );

    return {
    plan,
    requirements,
    database,
    apis,
    architecture
};
}

module.exports = {
    buildProject
};