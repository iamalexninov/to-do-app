## Overview
This project is designed to simplify task management by providing a clean interface for users to create, update, mark tasks as done, see pending and overdue tasks, backed by a powerful API. The architecture consists of a front-end React application and a back-end ASP.NET Core Web API.

## Project Demo 
> #### Home Screen - All, Pending and Overdue Tasks
- Use Navigation bar to change tasks (All, Pending and Overdue).

[All Tasks](./client/src/assets/img/all-tasks.png)
[Pending Tasks](./client/src/assets/img/pending-tasks.png)
[Overdue Tasks](./client/src/assets/img/overdue-tasks.png)

> #### Create a new Task
- Use Plus button for creating a new task.

[Create Task](./client/src/assets/img/create-task.png)

> #### Update an existing Task
- Use Edit button for updating an existing task.

[Update Task](./client/src/assets/img/update-task.png)

> #### Mark Task as Done
- Check "checkbox input" to mark a task as done

[Mark as Done](./client/src/assets/img/done-task.png)
[Marked Task](./client/src/assets/img/marked-task.png)


## Technologies Used
- Front-End: React, Axios, React Router, CSS Modules
- Back-End: ASP.NET Core Web API, Entity Framework Core (In-Memory Database)
- Development Tools: Visual Studio, Visual Studio Code, Node.js

## :rotating_light: Running the Project

To run the project in your local environment, follow these steps:

> Clone the repository to your local machine.

#### Front-End
1. Enter in `client` folder with command `cd .\client\`.

2. Run `npm install` in the project directory to install the required dependencies.

3. Run `npm run dev` to get the project started.

4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

#### Back-End
1. Enter in `server` folder with command `cd .\server\`, then enter in `TaskManagerAPI` folder with command `cd .\TaskManagerAPI\`.

2. Run `dotnet restre` in the project directory to restore dependencies.

3. Run `dotnet run` to get the project started.