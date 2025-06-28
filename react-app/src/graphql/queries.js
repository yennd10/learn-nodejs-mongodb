import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      _id
      title
      sku
      price
      description
      imageUrl
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      _id
      title
      sku
      price
      description
      imageUrl
    }
  }
`;

export const GET_BANNERS = gql`
  query GetBanners {
    banners {
      _id
      imageUrl
      title
      description
      bannerUrl
    }
  }
`;

export const GET_BANNER = gql`
  query GetBanner($id: ID!) {
    banner(id: $id) {
      _id
      imageUrl
      title
      description
      bannerUrl
    }
  }
`; 