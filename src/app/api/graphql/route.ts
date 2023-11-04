import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import prisma from "../../../../prisma/db";
import schema from "@/app/api/graphql/schema";

export type Context = {
  prisma: PrismaClient;
};

const apolloServer = new ApolloServer<Context>({ schema: schema });

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: any, res: any) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
