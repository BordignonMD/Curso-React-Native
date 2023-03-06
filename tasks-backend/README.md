# Tasks-Backend

Application developed to serve as a backend for the [Tasks](https://github.com/BordignonMD/Curso-React-Native/tree/master/tasks) application.
The application provides routes for create, update, read and delete tasks. To carry out the operations it is necessary to be authenticated, through the sign-in and sign-up routes.
Tasks are stored in a postgres database.

  * [Idea and Challenge](#Idea-and-Challenge)
  * [Operation](#Operation)
  * [Technologies](#Technologies)
  * [Installation Local](#Installation-Local)
  * [Support](#Support)

## Idea and Challenge

  The application is proposed in the course <a href="https://www.udemy.com/share/101Waw3@viyGN5mDAvs7buisoVoAKc7jlxNH1V72fd5gzjG3kgKFXPle09Oj0pO2FlKuqBx3/" target="_ublank">React Native: Desenvolva APPs Nativas para Android e iOS</a>.

## Documentation

User/Account Create

  * POST http://localhost:3000/signup as a parameter use "name", "email" and "password"

User Login/Authenticate

  * POST http://localhost:3000/signin as a parameter use "email" and "password"

Tasks List

  * GET http://localhost:3000/tasks as a header param use "Authorization" with value "Bearer " plus key string. Key string will be obtained through login.

Add Task

  * POST http://localhost:3000/tasks as a parameter use "desc" and "estimateAt". As a header param use "Authorization" with value "Bearer " plus key string. Key string will be obtained through login.

Delete task

  * DELETE http://localhost:3000/tasks/TASK_ID where TASK_ID is the id task value. As a header param use "Authorization" with value "Bearer " plus key string. Key string will be obtained through login.

Toggle Task (Toggles task between pending and done)

  * PUT http://localhost:3000/tasks/TASK_ID/toggle where TASK_ID is the id task value. As a header param use "Authorization" with value "Bearer " plus key string. Key string will be obtained through login.

## Technologies

This project was developed with [Node](https://nodejs.org/en/).

## Installation Local

1. Clone this repository

```
git clone https://github.com/BordignonMD/Curso-React-Native.git
```

2. Set the database

2.1. Start the postgres and check the database config file (config/db.js)

3. Set the app

3.1. Set the env var file. AuthSecret is a default value used for user authentication.

3.2. Install and compile dependencies

3.2.1 Access the app folder

```
cd /path/to/app
```

3.2.2. Install and compile dependencies

```
npm install
```

4. Start the app

```
npm start
```

## Support

Bug reports and feature requests can be filed with the rest for the project here:

  * [File Bug Reports and Features](https://github.com/BordignonMD/Curso-React-Native/issues)
