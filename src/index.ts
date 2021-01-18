require("dotenv").config();

import express = require("express");
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import cors = require("cors");
import { createServer } from "http";
import cookieParser = require("cookie-parser");

import resolvers from "./graphql/resolvers/";
import sequelize from "./db/sequelize";

const startServer = async () => {
  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res }),
  });

  await sequelize();

  const app = express();
  app.use(cookieParser());
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
  );

  app.get("/", function (req, res) {
    res.send("");
  });

  server.applyMiddleware({ app, path: "/graphql" });

  const httpServer = createServer(app);

  httpServer.listen({ port: process.env.PORT }, (): void =>
    console.log(`Server is running on port ${process.env.PORT}/graphql`)
  );
};

startServer().then();
