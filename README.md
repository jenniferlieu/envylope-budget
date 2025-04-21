# 💸 Envelope Budgeting
Envylope Budgeting is a personal finance app that uses the envelope budgeting system where users assign each penny a job. This system gives users clarity on both where their money is going and where their future finances are going. 

Envylope is unique because it takes the envelope system that gives users a proactive approach to their finances and combines it together with a reactive approach like transaction tracking. This allows the app to grow and change with the users depending on their needs, helping users confidently make informed decisions at every financial low or high.

This app is a full stack web app with React as the frontend, Node.js and Express as the backend, and PostgreSQL as the database.

## Instructions for Development (Setup and Run)
**System requirements to run the project:**
- Node 22.14.0
- NPM 10.9.0

1. Clone this repo
2. Change directory into the folder
3. Install dependencies for both the frontend and backend by running the command `npm run install`
4. Run the command `npm run dev` to start both the api server and web server
5. Go to http://localhost:5178 to see the running app. Use http://localhost:3001 to access the api-server.

Instructions as command lines:
```bash
git clone https://github.com/jenniferlieu/budget-app.git
cd envylope-budget
npm run install
npm run dev
```

## Development Plan
This project is developed as part of the Chingu solo project to showcase my full-stack web development skills for their tier 3 voyages.

**Timeline:** April 13, 2025 - April 27, 2025 (Deadline)

**Project Board:** [Miro](https://miro.com/app/board/uXjVIBFzsXQ=/?share_link_id=462500071440)

**Tech Stack:**
- Frontend (web app): React
- Backend (api server): Node.js + Express
- Database: PostgreSQL
- Deployment: Vercel (frontend), Render (backend + database)

## Requirements
Chingu requirements for tier 3 web developer:

* Must include distinct files which separate the FE and BE application logic in a way the follows the Separation of Responsibility Principle (SRP).
* If the app accesses a database it must be accessed only from the BE logic. Applications that access databases from FE logic will not be accepted.
* The BE logic must implement an app-specific API that is only implemented in the BE. The FE must access the BE API to deliver services to the end user.
* Applications that use technology like Firebase only for authentication are not acceptable. Apps which couple this form of authentication with application specific API are acceptable.
* The FE logic must include logic developed by the Chingu that operates on the data to transform it, change it, or present it to the end user
* It must implement a front-end application that accesses a back-end server that implements an API of your own design, optionally using a database such as a NoSQL DBMS like MongoDB or a SQL DBMS like PostgreSQL.
* Your backend must include CRUD (if using a database) or POST/READ/UPDATE/DELETE (for APIs).
