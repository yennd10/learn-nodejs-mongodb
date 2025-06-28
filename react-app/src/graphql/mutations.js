import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($productInput: ProductInput!) {
    createProduct(productInput: $productInput) {
      _id
      title
      sku
      price
      description
      imageUrl
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $productInput: ProductInput!) {
    updateProduct(id: $id, productInput: $productInput) {
      _id
      title
      sku
      price
      description
      imageUrl
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export const CREATE_BANNER = gql`
  mutation CreateBanner($bannerInput: BannerInput!) {
    createBanner(bannerInput: $bannerInput) {
      _id
      imageUrl
      title
      description
      bannerUrl
    }
  }
`;

export const UPDATE_BANNER = gql`
  mutation UpdateBanner($id: ID!, $bannerInput: BannerInput!) {
    updateBanner(id: $id, bannerInput: $bannerInput) {
      _id
      imageUrl
      title
      description
      bannerUrl
    }
  }
`;

export const DELETE_BANNER = gql`
  mutation DeleteBanner($id: ID!) {
    deleteBanner(id: $id)
  }
`; 