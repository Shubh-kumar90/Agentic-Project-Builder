import { useState } from "react";
import axios from "axios";

function ProjectForm() {

    const [projectIdea, setProjectIdea] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
const API_URL =
    import.meta.env.VITE_API_URL;
    const generateProject = async () => {

        try {

            setLoading(true);

            const response = await axios.post(
    `${API_URL}/api/project/generate`,
                { projectIdea }
            );

            setResult(response.data.result);

        } catch (error) {

            console.error(error);

            alert("Error generating project");

        } finally {

            setLoading(false);
        }
    };

    return (
        <div>

            <h2>AI Project Builder Agent</h2>

            <textarea
                rows="4"
                cols="60"
                placeholder="Enter project idea..."
                value={projectIdea}
                onChange={(e) =>
                    setProjectIdea(e.target.value)
                }
            />

            <br /><br />

            <button
                onClick={generateProject}
            >
                Generate Project
            </button>

            {loading && (
                <p>Generating...</p>
            )}

            {result && (
                <div>

                    <h3>Requirements</h3>
                    <pre>{result.requirements}</pre>

                    <h3>Database</h3>
                    <pre>{result.database}</pre>

                    <h3>APIs</h3>
                    <pre>{result.apis}</pre>

                    <h3>Architecture</h3>
                    <pre>{result.architecture}</pre>

                </div>
            )}

        </div>
    );
}

export default ProjectForm;