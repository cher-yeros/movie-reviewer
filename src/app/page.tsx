"use client";

import { gql, useQuery } from "@apollo/client";

export default function Home() {
  const AUTHORS = gql`
    query Authors {
      authors {
        id
        name
        novel {
          id
          title
          image
          createdAt
          updatedAt
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(AUTHORS);

  return (
    <div className="border-b">
      {loading && "Loading"}

      {data?.authors.map((author) => (
        <li key={author.id}>{author.id}</li>
      ))}
    </div>
  );
}
