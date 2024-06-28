import { request, gql } from 'graphql-request';

const endpoint = 'https://your-graphql-endpoint.com/graphql';

export const fetchGraphQLData = async (query: string, variables: Record<string, never> = {}) =>
  await request(
    endpoint,
    gql`
      ${query}
    `,
    variables,
  );
