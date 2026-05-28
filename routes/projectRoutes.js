const express = require("express");

const router = express.Router();

const {
    buildProject
} = require("../agents/projectBuilderAgent");

router.post("/generate", async (req, res) => {

    try {

        const { projectIdea } = req.body;

        const result = await buildProject(projectIdea);

        res.json({
            success: true,
            result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;