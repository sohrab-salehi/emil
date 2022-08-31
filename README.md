## 💫 Summary

In this project, a simple table component is implemented with the ability to sort, filter, and change page size and number. Also, all the table parameters are bound to the page URL so the client can load the required information directly by entering the right URL.

### REST API
I used the [Random User API](https://randomuser.me/api/) to provide some sample data to work with that. You can visit its documentation. 

### Linter & code formatter
`Eslint` and `Prettier` was used with **Airbnb** config.

### Important libraries
* [Ant design](https://ant.design/)
* [React router v6](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
* [Web vitals](https://web.dev/)

This project was developed in response to [Emil Group](https://www.emil.de/)'s code challenge for the front-end role.

**This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).**

## 🏃‍♂️ How to run the project?

At first, please route to the project directory and use the commands below to install all the dependencies.
```
npm install
```
or use `yarn`
```
yarn
```
For running the project in development environment use the commands below:
```
npm start
```
or use `yarn`
```
yarn start
```

## Available Scripts

In the project directory, you can run different commands for different purposes.

### 🛠 Run the tests
```
npm run test
```
Launches the test runner in the interactive watch mode and runs unit tests.

```
npx cypress open
```
Launches the cypress and runs all the end to end tests.


### 🏗️ Build the project
```
npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 🎛️ Eject webpack configs
```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Logging web vitals
You can observe web vitals parameters like cumulative layout shift(CLS) or first input delay(FID) by passing `console.log` function to `reportWebVitals()` in `index.tsx`.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
