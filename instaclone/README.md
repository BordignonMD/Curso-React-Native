# InstaClone

Application created to simulate the operation of the <a href="https://www.instagram.com/" target="_blank">Instagram</a> application. In the application it is possible to create an account and later create posts with photos and comments. You can also view and comment on posts by other users.

  * [Idea and Challenge](#Idea-and-Challenge)
  * [Operation](#Operation)
  * [Technologies](#Technologies)
  * [Images](#Images)
  * [Installation Local](#Installation-Local)
  * [Support](#Support)

## Idea and Challenge

  The application is proposed in the course <a href="https://www.udemy.com/share/101Waw3@viyGN5mDAvs7buisoVoAKc7jlxNH1V72fd5gzjG3kgKFXPle09Oj0pO2FlKuqBx3/" target="_ublank">React Native: Desenvolva APPs Nativas para Android e iOS</a>.

## Operation
  The app uses [Firebase](https://firebase.google.com/) for two features.
  [Authentication](https://firebase.google.com/docs/auth) is used to register and login application users, while the [Realtime Database](https://firebase.google.com/docs/database) is used to store posts, comments and data from app users.

## Technologies

This project was developed with the following technologies:

  * [React Native](https://reactnative.dev/)
  * [Firebase](https://firebase.google.com/)

## Images

<img src="https://user-images.githubusercontent.com/33905274/222801550-b226e919-57ba-4bd5-899c-fa698c3ca5e2.png" width="250" height="400"> <img src="https://user-images.githubusercontent.com/33905274/222802486-80ea8bef-8956-412f-8d05-cfacde7f6f99.png" width="250" height="400">
<img src="https://user-images.githubusercontent.com/33905274/222802518-8dcc99ae-615f-424a-998f-aa00b8405f25.png" width="250" height="400">
<img src="https://user-images.githubusercontent.com/33905274/222802530-c519ead7-31ef-4b11-b5bf-1e516cda32ae.png" width="250" height="400">
<img src="https://user-images.githubusercontent.com/33905274/222802547-89733454-f8b8-462c-8572-5d363cfeca93.png" width="250" height="400">
<img src="https://user-images.githubusercontent.com/33905274/222802556-62896ed5-9aeb-40fe-aa70-83fe24e9e8fb.png" width="250" height="400">
<img src="https://user-images.githubusercontent.com/33905274/222802578-a6406378-84a2-464b-bcd5-d85dfa723581.png" width="250" height="400">
<img src="https://user-images.githubusercontent.com/33905274/222802604-614ee697-9851-4519-a426-061353813441.png" width="250" height="400">


## Installation Local

1. Clone this repository

```
git clone https://github.com/BordignonMD/Curso-React-Native.git
```

2. Set the database



2.1. Access the [Firebase Console](https://firebase.google.com/) and create an account

2.2. Create a new project with default options

2.3. Select Realtime Database into Firebase Console and create the database

2.4. Select Authentication into Firebase Console and Set up sign-in method

2.4.1. Select Email/Password, enable the first option and save

2.5. Set the roles of database

2.5.1. Select Realtime Database into Firebase Console

2.5.2. Select Roles and set this roles

```
{
  "rules": {
    ".read": "true",
    ".write": "auth != null",
    "users": {
      "$id": {
        ".write": "!data.exists()"
      }
    }
  }
}
```

3. Set the app

3.1. Set the env var file

3.1.1. In Firebase Console, select Realtime Database and copy the url of the database. Set this value for DEFAULT_BASE_URL env var.

3.1.2. Set `https://www.googleapis.com/identitytoolkit/v3/relyingparty` for AUTH_BASE_URL env var.

3.1.3. In Firebase Console, select the Project Settings and copy the api key value. Set this value for API_KEY env var.

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
source ~/.bash_profile&&react-native run-android
```

## Support

Bug reports and feature requests can be filed with the rest for the project here:

  * [File Bug Reports and Features](https://github.com/BordignonMD/Curso-React-Native/issues)

