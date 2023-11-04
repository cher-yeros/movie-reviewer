export const novelSchema = `#graphql 
  type Novel {
    id: ID
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authors: [Author]
  }

  type Query {
    novels: [Novel] 
  }

  type Mutation {
    addNovel(id: ID): Novel
  }



`;

export const novelResolver = {
  Query: {},
  Mutation: {},
};
