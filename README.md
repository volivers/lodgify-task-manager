# Lodgify Task Manager

> Lodgify user profile task manager built with React, [Styled Components](https://styled-components.com/)
and [Ant Design](https://ant.design/).

## Overview

The Lodgify Task Manager is a widget that shows the current progress of the user profile creation.
The user is able to check the missing tasks of a specific group and mark them as done.

## Live version

The live version is available at: <https://lodgify-task-manager.netlify.app/>

## Install

This project was created using [CRA](https://github.com/facebook/create-react-app).
To run the code, first install all the dependencies needed with:

`yarn install`

Then, you will be able to start the project executing the command:

`yarn start`

It will open [http://localhost:3000](http://localhost:3000) (default),
so you can view the project in the browser.

## Architecture

The project was architectured in the following way:

### `/src`

The `/src` contains all the React codebase.

```
.
├── components
│   ├── card
│   │   └── Card.tsx
│   ├── progress
│   │   └── ProgressBar.tsx
│   ├── tasks
│   │   ├── Task.tsx
│   │   └── TasksList.tsx
│   ├── GlobalStyle.ts
│   └── TaskManager.tsx
├── types
│   ├── domainTypes.ts
│   └── responseTypes.ts
├── utils
│   ├── apiCall.ts
│   ├── apiService.ts
│   ├── calculations.ts
│   └── theme.ts
├── _app.tsx
└── index.tsx

```

#### `/components`

This folder includes all the components used to build the project, dumb and smart ones.

#### `/types`

It contains the response and domain types used in this project.

#### `/utils`

It contains all the functions used to fetch data and calculate the progress of the user profile creation,
along with the main theme.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.
Please make sure to include or update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright © 2021 Vasco Oliveira
