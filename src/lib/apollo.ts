import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4r480a10l7p01z59yem1roc/master',
  cache: new InMemoryCache()
})
