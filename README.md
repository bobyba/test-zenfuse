# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

Task technical description

Задача:

1. Необходимо сверстать компонент и подключить стили из Tailwind CSS v.2
2. Настроить взаимодействие с компонентом через слайдер и инпут. При изменении позиции слайдера должно происходить изменение значения в инпуте. И наоборот, при изменении содержимого инпута слайдер должен изменять позицию
3. Сделать переключение режима light/dark через Tailwind Dark Mode

Валидация:

1. в инпут можно ввести только числа с плавающей точкой
2. после запятой только 2 знака
3. минимальное значение 0, максимальное значение 100
4. недопустимы отрицительные значения, при вводе отрицательного значения приводить его к 0
5. при вводе значения большее 100, приводить значение к 100