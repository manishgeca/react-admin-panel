# React Admin Application
This repository contains a React admin application showcasing a variety of features including theming, routing, state management, and integration with different UI components and libraries. Below is a detailed guide to understand and contribute to the project.

## Features
### Theming
The application allows users to switch between light and dark themes. This feature provides a customizable user experience based on personal preferences.

### Routing
The routing functionality is implemented using React Router, enabling seamless navigation between different pages within the application.

### State Management
State management is handled using Redux, a predictable state container for JavaScript applications. Redux manages the theme state, ensuring consistent behavior across components.

### UI Components
The application utilizes various UI components to enhance the user interface and provide rich functionality:

- Header: Displays the application title and a theme switcher button.
- Sidebar: Navigation menu to access different pages.
- ThemeSwitcher: Button to toggle between light and dark themes.
- Dashboard: Placeholder for summary statistics and charts.
- Tables: Display tabular data using React Table.
- Charts: Render charts using Recharts library.
- Calendar: Display events using React Big Calendar.
- Kanban: Visualize tasks using React Trello.

---

### Getting Started
To get started with the project, follow these steps:

- Clone the repository:

```
bash
Copy code
git clone <repository-url>
Install dependencies:

Copy code
npm install
Run the application:

sql
Copy code
npm start
The application will be available at http://localhost:3000.

Folder Structure
The project follows a structured folder hierarchy for better organization:
```

## Folder Structure
```
/src
|-- index.js
|-- App.js
|-- /components
|   |-- Header.js
|   |-- Sidebar.js
|   |-- ThemeSwitcher.js
|-- /pages
|   |-- Dashboard.js
|   |-- Tables.js
|   |-- Charts.js
|   |-- Calendar.js
|   |-- Kanban.js
|-- /store
|   |-- index.js
|   |-- themeReducer.js
|-- themes.js
```
## Project created under React Internship at Celebal Technologies by MANISH KUMAR
