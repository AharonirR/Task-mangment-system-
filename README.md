# Task Management System

This project is a web-based Task Management System that allows users to add, view, update, and delete tasks. It is built using HTML, CSS, and JavaScript and utilizes the browser's local storage to persist tasks across sessions.

## Getting Started

### Prerequisites

To run this project, you need a web browser and a local web server for testing purposes. You can use a simple HTTP server like `http-server` if you have Node.js installed.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nirkil/task-management-system.git
    cd task-management-system
    ```

2. Serve the application:
    - You can use a simple HTTP server. If you have Node.js installed, you can use `http-server`:
      ```bash
      npx http-server
      ```

3. Open the application in your browser:
    - Navigate to `http://localhost:8080` (or the port provided by your server).

### Usage

1. Enter a new task in the input field.
2. Click the "Add Task" button to add the task to the list.
3. To edit a task, click the "Edit" button next to the task, modify the task text in the prompt, and click "OK".
4. To delete a task, click the "Delete" button next to the task and confirm the deletion.

### Project Structure
├── index.html # HTML file that contains the structure of the application
├── styles.css # CSS file that contains the styles of the application
├── script.js # JavaScript file that contains the logic of the application
├── README.md # This README file
