## Restaurant Browser

Welcome to the Restaurant Browser code test! In this project, you will create a mini app to explore the closest restaurants and their menus.

#### Backend

We provide the backend for you, which consists of two endpoints:

List of Restaurants: https://api.last.app/frontend-interview/restaurants
Restaurant Catalog: https://api.last.app/frontend-interview/restaurants/:id/catalog

#### Frontend

The frontend should display the list of restaurants. When a restaurant is clicked, the user should be directed to a different page where they can view the restaurant's catalog.

The catalog should include a search input at the top to filter products using the query parameter of the catalog endpoint.

You can utilize browser geolocation to obtain the latitude and longitude and use it to sort the restaurants. There’s no need to send the order to a server, only the payment animation and final screen.

Here is the Figma design to follow:
https://www.figma.com/file/ZuavQ8HyYcv9V2vTmGVLAQ/Frontend-Interview?node-id=2%3A6721

#### Front-end stack

- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. Clone this project

```shell
git clone https://github.com/olehsyrbu/restaurants.git project-name
```

2. Navigate to the project directory:

```shell
cd project-name
```

3. Install dependencies with

```shell
npm install
```

4. Run application

```shell
# Start the development environment
> npm run dev
```

Open link http://127.0.0.1:5173/
