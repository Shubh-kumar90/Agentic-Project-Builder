CREATE DATABASE ai_project_builder;
USE ai_project_builder;
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(255),
    requirements LONGTEXT,
    database_design LONGTEXT,
    api_design LONGTEXT,
    architecture LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);