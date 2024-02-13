import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://carline.onrender.com/",
  cache: new InMemoryCache(),
});
