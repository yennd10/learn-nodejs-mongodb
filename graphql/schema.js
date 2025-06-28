const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Product {
    _id: ID!
    title: String!
    sku: String!
    price: Float!
    description: String!
    imageUrl: String!
  }

  type Banner {
    _id: ID!
    imageUrl: String!
    title: String!
    description: String!
    bannerUrl: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    banners: [Banner!]!
    banner(id: ID!): Banner
    GetProducts: [Product!]!
  }

  input ProductInput {
    title: String!
    sku: String!
    price: Float!
    description: String!
    imageUrl: String!
  }

  input BannerInput {
    imageUrl: String!
    title: String!
    description: String!
    bannerUrl: String!
  }

  type Mutation {
    createProduct(productInput: ProductInput!): Product!
    updateProduct(id: ID!, productInput: ProductInput!): Product!
    deleteProduct(id: ID!): Boolean!
    
    createBanner(bannerInput: BannerInput!): Banner!
    updateBanner(id: ID!, bannerInput: BannerInput!): Banner!
    deleteBanner(id: ID!): Boolean!
  }
`;

module.exports = typeDefs; 