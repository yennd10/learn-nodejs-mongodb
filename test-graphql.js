const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

async function testGraphQL() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });

  console.log(`🚀 Server ready at: ${url}`);
  console.log('\nTest queries you can run in the GraphQL playground:');
  console.log('\n1. Create a product with SKU:');
  console.log(`
mutation {
  createProduct(productInput: {
    title: "Test Product"
    sku: "PROD-001"
    price: 29.99
    description: "A test product with SKU"
    imageUrl: "https://via.placeholder.com/300x200"
  }) {
    _id
    title
    sku
    price
    description
    imageUrl
  }
}
  `);

  console.log('\n2. Get all products:');
  console.log(`
query {
  products {
    _id
    title
    sku
    price
    description
    imageUrl
  }
}
  `);

  console.log('\n3. Update a product:');
  console.log(`
mutation {
  updateProduct(id: "PRODUCT_ID_HERE", productInput: {
    title: "Updated Product"
    sku: "PROD-002"
    price: 39.99
    description: "Updated product description"
    imageUrl: "https://via.placeholder.com/300x200"
  }) {
    _id
    title
    sku
    price
    description
    imageUrl
  }
}
  `);
}

testGraphQL().catch(console.error); 