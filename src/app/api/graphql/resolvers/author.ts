export const authorSchema = `#graphql
  type Author {
    id: ID
    name: String
    novelId: String
    novel: Novel
  }

  type Query {
    authors: [Author] 
  }

  type Mutation {
    addAuthor(id: ID): Author
  }


`;

export const authorResolver = {
  Query: {},
  Mutation: {},
};
