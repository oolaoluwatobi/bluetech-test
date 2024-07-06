# Blutech Solutions LLC Test (React + TypeScript + Vite)

This readme provides  instructions on how to get this react project working.

After cloning this repository, in your terminal, enter
```js
npm install
```
to install all dependencies.

After the installation, enter
```js
npm run dev
````
to start the react app, the app should run on `http://localhost:5173`

## Overview

### UI Implementation
The UI was implemented according to this [figma design](https://www.figma.com/design/5YoDO1EKuVGMJK77g2CY43/Blutech-solution?node-id=425-359&t=fCesi5WRWJUPge5L-0) 

### Api integration
The APIs integrated are a GET request, and a GET request with a query string to search the database on the backend.

API Context was used, the data was fetched in a context provider and shared across the app.
