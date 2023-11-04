import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { merge } from "lodash";
import { authorResolver, authorSchema } from "./resolvers/author";
import { novelResolver, novelSchema } from "./resolvers/novel";

const schema1 = makeExecutableSchema({
  typeDefs: [authorSchema, novelSchema],
  resolvers: merge(authorResolver, novelResolver),
});

const schema = addMocksToSchema({ schema: schema1 });

export default schema;
