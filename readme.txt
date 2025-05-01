##Task Manager API:

#Description
This is a simple Task Manager API built with Node.js. It allows users to manage tasks with the following features:

Create a new task
Get a list of tasks
Get a specific task by ID
Update a task
Delete a task

The API is built with Express.js and uses an in-memory data structure for storing tasks.

#Features
    Create, Read, Update, Delete (CRUD) operations for tasks

    Validation of task data before performing actions

    Error handling for invalid data or missing resources

#Installation
Prerequisites:
    Node.js (v18 or higher)
    npm (Node Package Manager)

Steps to Install
    Clone the repository
        git clone https://github.com/airtribe-projects/task-manager-api-nikhilsonune05
    Navigate to the project folder
        cd task-manager-api-nikhilsonune05
    Install dependencies
        npm install
    Running the Application
        npm run dev
    The API will run on http://localhost:3000.

Endpoints
1. POST /api/v1/tasks/
    Create a new task.
        Request Body:
        {
            "title": "New Task",
            "description": "Task description",
            "completed": false
        }

Response:
    Status: 201 (Created)
    Body: All tasks

2. GET /api/v1/tasks/
    Get a list of all tasks.

    Response:
    Status: 200 (OK)

    Body: An array of all the tasks

3. GET /api/v1/tasks/:id
    Get a specific task by its ID.

    Response:
    Status: 200 (OK)
    Body: The task object

4. PATCH /api/v1/tasks/:id
    Update a task by its ID.

    Request Body:
        {
            "title": "Updated Task",
            "description": "Updated description",
            "completed": true
        }
    Response:
    Status: 200 (OK)

    Body: The updated task object

5. DELETE /api/v1/tasks/:id
    Delete a task by its ID.

    Response:
    Status: 200 (OK)

    Body: Message confirming deletion

#Running Tests
    You can run the tests using the following command:
    npm test
    This will run the test suite using tap and supertest to validate that the API is functioning correctly.

#Tests
The following tests are included:

    POST /api/v1/tasks/: Tests for creating a new task

    GET /api/v1/tasks/: Tests for fetching all tasks

    GET /api/v1/tasks/:id: Tests for fetching a specific task

    PATCH /api/v1/tasks/:id: Tests for updating a task

    DELETE /api/v1/tasks/:id: Tests for deleting a task