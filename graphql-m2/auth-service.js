const config = require('./config');

//https://developer.adobe.com/commerce/webapi/graphql/usage/authorization-tokens/
// GraphQL mutation for customer login
const CUSTOMER_LOGIN = `
  mutation customerLogin($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

class AuthService {
    constructor() {
        this.token = null;
        this.client = null;
    }

    async initialize() {
        if (!this.client) {
            // GraphQLClient tạo ra để gửi request đến GraphQL server
            const { GraphQLClient } = await import('graphql-request');
            this.client = new GraphQLClient(config.graphqlUrl, {
                headers: { ...config.headers },
            });
        }
    }

    // Customer login and get token
    async login(email, password) {
        try {
            await this.initialize();
            const variables = {
                email: config.customerEmail,
                password: config.customerPassword,
            };
            const data = await this.client.request(CUSTOMER_LOGIN, variables);

            // Kiểm tra xem có token không
            if (data.generateCustomerToken && data.generateCustomerToken.token) {
                this.token = data.generateCustomerToken.token;

                // Thêm token vào header của request
                this.client.setHeader('Authorization', `Bearer ${this.token}`);
                // console.log('Customer login successful!');
                return this.token;
            } else {
                throw new Error('Login failed: No token received');
            }
        } catch (error) {
            console.error('Customer login failed:', error.message);
            throw error;
        }
    }


    // Logout and clear token
    logout() {
        this.token = null;
        if (this.client) {
            this.client.setHeaders({ ...config.headers });
        }
        console.log('logged out');
    }
}

// module.exports = AuthService;

async function main() {
    const authService = new AuthService();

    // Customer login
    try {
        const token = await authService.login();
        console.log('Login successful');
        console.log('Authentication token:', JSON.stringify(token));
    } catch (error) {
        console.error('Authentication failed:', error.message);
    }
}

main();