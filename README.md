
## Table of Contents

- [Description](#description)
- [How to Use](#how-to-use-and-run-in-local)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)


## Description

The basic structure and beggining of the app was made by following the tutorial:
https://redux.js.org/basics/example

I then added the following features:
- Make Urgent: Allows the user to highlight a todo in red
- Delete: Allows user to delete an added Todo
- Deleted list: Tab to view all deleted Todos
- All styling and css, as well as responsiveness to screen (mobile friendly)


## How To Use and Run In Local

How to...

## Folder Structure


```
my-app/
  README.md
  package.json
  package-lock.json
  yarn.lock
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    actions/
      index.js
      index.spec.js
    components/
      App.css
      App.js
      background-image.jpg
      Footer.js
      Link.js
      Todo.js
      TodoList.js
    containers/
      AddTodo.js
      FilterLink.js
      VisibleTodoList.js
    reducers/
      index.js
      todos.js
      todos.spec.js
      visibilityFilter.js
    index.css
    index.js
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


