# Random Number App

A small React + Vite app that renders three cards, each showing a random number
between 1 and 100 and labelling it as "High" (> 50) or "Low".

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server with HMR      |
| `npm run build`   | Build for production into `dist/`  |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint                         |

## Project structure

```
src/
  main.jsx    App entry point
  App.jsx     Generates the random numbers and renders the cards
  Card.jsx    Displays one number and its High/Low label
  App.css     Styles
```

## How it works

`App.jsx` calls `Math.floor(Math.random() * 100) + 1` once per card and passes the
value to `Card` as the `num` prop. New numbers are generated on every page reload.
