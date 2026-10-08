# ASDD Project

A simple Node.js + Express REST API that serves a sample restaurant menu.

## Features

- `GET /` returns a short API message
- `GET /menu` returns a JSON array of menu items

## Tech Stack

- Node.js
- Express (`^5.2.1`)

## Getting Started

### Prerequisites

- Node.js 18+ (Node 22 recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
node server.js
```

The server runs on port `3000` by default.
You can change it by setting `PORT`:

```bash
PORT=4000 node server.js
```

## API Endpoints

### `GET /`
Returns a plain text message.

### `GET /menu`
Returns menu data in JSON format:

```json
[
  { "id": 1, "name": "Margherita Pizza", "price": 12.5, "category": "Pizza" },
  { "id": 2, "name": "Caesar Salad", "price": 8.75, "category": "Salad" },
  { "id": 3, "name": "Lemonade", "price": 3.5, "category": "Drink" }
]
```

## Docker

A `Dockerfile` is included in the repository for containerized usage.

Build:

```bash
docker build -t asdd-project .
```

Run:

```bash
docker run -p 3000:3000 -e PORT=3000 asdd-project node server.js
```

Then open:
- `http://localhost:3000/`
- `http://localhost:3000/menu`
