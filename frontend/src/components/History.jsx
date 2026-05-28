import { useEffect, useState } from "react";
import axios from "axios";

function History() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        loadProjects();

    }, []);

    async function loadProjects() {

        try {

            const response =
                await axios.get(
                    "`${API_URL}/api/history`"
                );

            setProjects(response.data);

        } catch (error) {

            console.error(error);
        }
    }

    return (
        <div>

            <h2>Project History</h2>

            {
                projects.map((project) => (

                    <div
                        key={project.id}
                        style={{
                            border: "1px solid gray",
                            marginBottom: "10px",
                            padding: "10px"
                        }}
                    >
                        <h3>
                            {project.project_name}
                        </h3>

                        <p>
                            Created:
                            {" "}
                            {new Date(
                                project.created_at
                            ).toLocaleString()}
                        </p>

                    </div>

                ))
            }

        </div>
    );
}

export default History;