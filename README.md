## Goal

Display a list of restaurants. When a restaurant is clicked, the user should be directed to a different page where they can view the restaurant's catalog.

The catalog includes a search input at the top to filter products using the query parameter of the catalog endpoint.

I use browser geolocation to obtain the latitude and longitude and display the closest restaurant to you.

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


#### Demo link 
https://www.loom.com/share/ae44fa1e0bc841c0a4de9d67991c74b1

#### Things to Improve:
- Add tests
- Implement a nice popup for purchase actions
- Convert all SVG icons to components to make them more reusable