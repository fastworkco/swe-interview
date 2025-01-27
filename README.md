# REST API for Managing Items

This project demonstrates a REST API implementation for managing items, written in TypeScript. It includes endpoints for CRUD operations and other functionalities for evaluating candidates during interviews.

## Features
- CRUD operations for items
  - RESTful API design
- Get list items with pagination
- Input validation ex. `class-validator`
- Modular and scalable project structure
- Search and filter items (name, price range)
- Sorting items

## Additional Features
- Cache result of each request for 60 seconds

## Endpoints

### Base URL
`http://localhost:3000`

### Endpoints

#### 1. Create an Item
- **POST** `/items`
- **Request Body**:
  ```json
  [
    {
      "name": "string",
      "price": number
      "amount": number
    }
  ]
  ```
- **Response**:
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "price": number,
      "amount": number
    }
  ]
  ```

#### 2. Get All Items
- **GET** `/items`
- **Response**:
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "price": number,
      "amount": number
    }
  ]
  ```

#### 3. Get an Item by ID
- **GET** `/items/:id`
- **Response**:
  ```json
  {
    "id": "string",
    "name": "string",
    "price": number,
    "amount": number
  }
  ```

#### 4. Update an Item
- **PUT** `/items/:id`
- **Request Body**:
  ```json
  {
    "name": "string",
    "price": number,
    "amount": number
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "name": "string",
    "price": number,
    "amount": number
  }
  ```

#### 5. Delete an Item
- **DELETE** `/items/:id`
- **Response**:
  ```json
  {
    "message": "Item deleted successfully"
  }
  ```

## Project Structure

```
swe-interview/
├── data/                # Directory for mount to docker
├── migrations/          # Database migration file
├── seeds/               # Seed file
├── src/
│   ├── index.ts         # Entry point
│   ├── knexfile.ts      # Knex configuration
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── jest.config.js       # Jest configuration
├── docker-compose.yaml  # Docker for PostgreSQL
└── README.md            # Instructions for candidates
```

## Setup and Run

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=14.x)
- [Yarn](https://yarnpkg.com/) (preferred) or npm

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/swe-interview.git
   cd swe-interview
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Run PostgreSQL Local:
   ```bash
   mkdir data
   docker-compose up -d
   ```

3. Run database migration:
   ```bash
   yarn run migrate
   ```

4. Run seed data:
   ```bash
   yarn run seed
   ```

5. Run the project:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

6. Access the API at `http://localhost:3000`.
