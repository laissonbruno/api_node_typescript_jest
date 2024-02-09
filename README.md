# Node API with TypeScript and Jest

## Introduction
This documentation provides an overview of a Node.js API project configured with TypeScript for type safety and Jest for testing. The project includes dependencies for Express.js, TypeORM, and other necessary libraries.

## Project Structure

- src/
  - index.ts
- node_modules/
- package.json
- tsconfig.json
- jest.config.js


## Dependencies
- **Express.js**: A minimalist web framework for Node.js.
- **TypeORM**: An Object-Relational Mapping (ORM) library for TypeScript and JavaScript.
- **Jest**: A JavaScript testing framework.
- **uuid**: A library for generating UUIDs.
- **reflect-metadata**: A library for introspecting the metadata of classes.

## Development Dependencies
- **typescript**: The TypeScript compiler.
- **ts-node-dev**: A development tool that enables automatic TypeScript transpilation and server restarting.
- **@types/express**: TypeScript definitions for Express.js.
- **@types/jest**: TypeScript definitions for Jest.
- **@types/uuid**: TypeScript definitions for UUID.

## Scripts
- **dev**: Starts the development server using `ts-node-dev` to transpile TypeScript on the fly.
- **test**: Executes Jest tests. Sets the environment variable `NODE_ENV` to `'test'`.
- **typeorm**: Executes TypeORM commands using `ts-node-dev`.

## Configuration Files
- **tsconfig.json**: Configuration file for TypeScript compiler options.
- **jest.config.js**: Configuration file for Jest test runner.

## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.
4. Execute tests with `npm test`.
5. Utilize TypeORM commands with `npm run typeorm`.

## Author
- **Laisson Bruno**

## License
- **ISC**

## Version
- **1.0.0**

