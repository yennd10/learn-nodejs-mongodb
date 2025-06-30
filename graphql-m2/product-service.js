const config = require('./config');

// GraphQL query to get products
//  pageSize:10, currentPage:1, search: "Dress", filter: { price: { from: "50", to:"300"  }, sku:{ in:["VD01", "VD02"] }}
const GET_PRODUCTS = `
  query getProducts($pageSize: Int, $currentPage: Int, $search: String) {
    products(pageSize: $pageSize, currentPage: $currentPage, search: $search) {
      items {
        id
        name
        sku
        url_key
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        image {
          url
          label
        }
        description {
          html
        }
        short_description {
          html
        }
        stock_status
        type_id
        created_at
        updated_at
        categories {
          id
          name
          url_path
        }
        media_gallery {
          url
          label
          position
        }
      }
      page_info {
        page_size
        current_page
        total_pages
      }
      total_count
    }
  }
`;

// GraphQL query to get a single product by SKU
//  pageSize:10, currentPage:1, search: "Dress", filter: { price: { from: "50", to:"300"  }, sku:{ in:["VD01", "VD02"] }}
const GET_PRODUCT_BY_SKU = `
  query getProductBySku($sku: String!) {
    products(filter: { sku: { eq: $sku } }) {
      items {
        id
        name
        sku
        url_key
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        image {
          url
          label
        }
        description {
          html
        }
        short_description {
          html
        }
        stock_status
        type_id
        created_at
        updated_at
        categories {
          id
          name
          url_path
        }
        media_gallery {
          url
          label
          position
        }
        ... on ConfigurableProduct {
          configurable_options {
            id
            attribute_id
            attribute_code
            label
            values {
              value_index
              label
            }
          }
          variants {
            product {
              id
              name
              sku
              price_range {
                minimum_price {
                  regular_price {
                    value
                    currency
                  }
                  final_price {
                    value
                    currency
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// GraphQL query to get categories
//pageSize:10, currentPage:1, filters: {name: { match:"Shop" } }
const GET_CATEGORIES = `
  query getCategories {
    categories {
      items {
        id
        name
        url_path
        url_key
        level
        children_count
        image
        description
        meta_title
        meta_description
        children {
          id
          name
          url_path
          url_key
          level
          children_count
        }
      }
    }
  }
`;

class ProductService {
  constructor() {
    this.client = null;
  }

  async initialize() {
    if (!this.client) {
      const { GraphQLClient } = await import('graphql-request');
      this.client = new GraphQLClient(config.graphqlUrl, {
        headers: { ...config.headers },
      });
    }
  }

  // Get products with pagination and search
  async getProducts(pageSize = 9, currentPage = 1, search = "") {
    try {
      await this.initialize();
      const variables = { pageSize, currentPage, search };
      const data = await this.client.request(GET_PRODUCTS, variables);
      if (data.products) {
        return data.products;
      } else {
        throw new Error('Failed to retrieve products');
      }
    } catch (error) {
      console.error('Failed to get products:', error.message);
      throw error;
    }
  }

  // Search products by name
  async searchProducts(searchTerm, pageSize = 10, currentPage = 1) {
    try {
      return await this.getProducts(pageSize, currentPage, searchTerm);
    } catch (error) {
      console.error('Failed to search products:', error.message);
      throw error;
    }
  }

  // Get a single product by SKU
  async getProductBySku(sku) {
    try {
      await this.initialize();
      const variables = { sku };

      const data = await this.client.request(GET_PRODUCT_BY_SKU, variables);

      if (data.products && data.products.items.length > 0) {
        return data.products.items[0];
      } else {
        throw new Error(`Product with SKU ${sku} not found`);
      }
    } catch (error) {
      console.error('Failed to get product by SKU:', error.message);
      throw error;
    }
  }

  // Get categories
  async getCategories() {
    try {
      await this.initialize();
      const data = await this.client.request(GET_CATEGORIES);
      if (data.categories) {
        return data.categories;
      } else {
        throw new Error('Failed to retrieve categories');
      }
    } catch (error) {
      console.error('Failed to get categories:', error.message);
      throw error;
    }
  }

  // Get products by category
  async getProductsByCategory(categoryId, pageSize = 10, currentPage = 1) {
    try {
      const filter = { category_id: { eq: categoryId } };
      return await this.getProducts(pageSize, currentPage, filter);
    } catch (error) {
      console.error('Failed to get products by category:', error.message);
      throw error;
    }
  }
}

module.exports = ProductService; 