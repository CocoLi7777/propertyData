# Property Data Dashboard

## Content

- [Introduction](#introduction)
- [Details](#details)
  - [Highlights](#highlights)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Running locally](#running-locally)
  ​

## Introduction

This project is to build a property information display board and provide the function of choosing specific property.

The tasks are:

1. Set up database with collections of users and properties.
2. Create API service for get all properties, get single property, create new property.
3. Create API service for create new user, bcrypt password and return token by JWT Token.
4. Create error handling.
5. Consume an API from the back-end and retrieve the property data.
6. Display specific property income and expense number from Jan to Dec by Bar Chart.
7. Provide drop down menu and let users choosing specific property to display.
8. Provide loading solution to have better user experience.

## Details:

### Highlights

- Using MVC pattern in the backend.
- Using different middleware to keep security of application, like helmet, hpp, rate limiting and xss.
- Using [React](https://reactjs.org/) to create reusable components.
- Custom hook to call API and save data in the state.
- Responsive UI using [antd](https://ant.design/), mobile friendly.
- Spinner solution used when data loading.

## Prerequisites

NPM - Install NPM for all dependencies.

## Quick Start

Install dependencies:
npm install

## Running locally

Run the client & server with concurrently:

npm run dev

Run the Express server only:

npm run server

Run the React client only:

npm run client

Server runs on http://localhost:5001 and client on http://localhost:3000
