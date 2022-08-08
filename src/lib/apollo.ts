import { ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl57eiqtp4keh01uihdr07hf1/master',
	cache: inMemoyCache()
});