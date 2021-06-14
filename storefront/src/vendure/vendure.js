const {GraphQLClient} = require('graphql-request');
const {
    getStockForProductsQuery,
    adjustOrderLineMutation,
    eligibleShippingMethodsQuery,
    getProductQuery,
    addItemToOrderMutation,
    getActiveOrderQuery,
    setOrderShippingMethodMutation,
    setCustomerForOrderMutation,
    setOrderShippingAddressMutation,
    nextOrderStatesQuery,
    addPaymentToOrderMutation,
    transitionOrderToStateMutation,
    orderByCodeQuery,
    submitProductReviewMutation,
    loginQuery,
    getActiveCustomerQuery,
    logoutMutation,
    updateCustomerForOrderMutation,
    createCustomerAddressMutation,
    updateCustomerAddressMutation,
    registerMutation,
    resetPasswordMutation,
    requestPasswordResetMutation,
    setOrderBillingAddressMutation,
    setOrderCustomFieldsMutation,
    getDucthAddressQuery
} = require('./client.queries');

/**
 * Class responsible for all communication with Vendure api
 * and keeping track of activeOrder in Vue global store
 */
class Vendure {

    tokenName = 'vendure-auth-token';

    constructor(store) {
        this.client = new GraphQLClient(process.env.GRIDSOME_VENDURE_API, {
            headers: {'vendure-token': process.env.GRIDSOME_VENDURE_TOKEN},
        });
        this.$store = store;
        this.getActiveOrder().then(order => this.$store.activeOrder = order);
    }

    async getStockForProducts() {
        const {products} = await this.request(getStockForProductsQuery);
        return products.items.map((p) => setCalculatedFields(p));
    }

    async getProduct(slug) {
        const {product} = await this.request(getProductQuery, {slug});
        return setCalculatedFields(product);
    }

    async addProductToCart(productVariantId, quantity) {
        const {addItemToOrder: order} = await this.request(addItemToOrderMutation, {productVariantId, quantity});
        this.validateResult(order);
        this.$store.activeOrder = order;
        await this.setLowestShippingMethod();
        return order;
    }

    async setLowestShippingMethod() {
        const methods = await this.getEligibleShippingMethods();
        const [defaultMethod] = methods
            .filter(method => method.name.indexOf('Afhalen') === -1)
            .sort((a, b) => a.priceWithTax - b.priceWithTax);
        if (defaultMethod) {
            await this.setOrderShippingMethod(defaultMethod.id);
        } else {
            console.error(`No default shipping found`);
        }
    }

    async getEligibleShippingMethods() {
        const {eligibleShippingMethods} = await this.request(eligibleShippingMethodsQuery);
        return eligibleShippingMethods;
    }

    async setOrderShippingMethod(shippingMethodId) {
        const {setOrderShippingMethod} = await this.request(setOrderShippingMethodMutation, {shippingMethodId});
        this.validateResult(setOrderShippingMethod);
        this.$store.activeOrder = setOrderShippingMethod;
        return setOrderShippingMethod;
    }

    async getActiveOrder() {
        const {activeOrder} = await this.request(getActiveOrderQuery);
        this.$store.activeOrder = activeOrder;
        return activeOrder;
    }

    async adjustOrderLine(orderLineId, quantity) {
        const {adjustOrderLine: activeOrder} = await this.request(adjustOrderLineMutation, {orderLineId, quantity});
        this.validateResult(activeOrder);
        await this.setLowestShippingMethod();
        this.$store.activeOrder = activeOrder;
        return activeOrder;
    }

    async setCustomerForOrder(input) {
        const {setCustomerForOrder: order} = await this.request(setCustomerForOrderMutation, {input});
        this.validateResult(order);
        this.$store.activeOrder = order;
        return order;
    }

    async updateCustomer(input) {
        await this.request(updateCustomerForOrderMutation, {input});
        return this.getActiveCustomer()
    }

    async createCustomerAddress(input) {
        await this.request(createCustomerAddressMutation, {input});
        return this.getActiveCustomer()
    }

    async updateCustomerAddress(input) {
        await this.request(updateCustomerAddressMutation, {input});
        return this.getActiveCustomer()
    }

    async resetPassword(token, password) {
        const result = await this.request(resetPasswordMutation, {token, password});
        this.validateResult(result);
        return result;
    }

    async requestResetPassword(emailAddress) {
        const result = await this.request(requestPasswordResetMutation, {emailAddress});
        this.validateResult(result);
        return result;
    }

    async setOrderShippingAddress(input) {
        if (!input.company || input.company.length === 0) {
            input.company = '-'; // Dirty fix
        }
        if (!input.phoneNumber || input.phoneNumber.length === 0) {
            input.phoneNumber = '-'; // Dirty fix
        }
        const {setOrderShippingAddress: order} = await this.request(setOrderShippingAddressMutation, {input});
        this.$store.activeOrder = order;
        return order;
    }

    async setOrderBillingAddress(input) {
        if (!input.company || input.company.length === 0) {
            input.company = '-'; // Dirty fix
        }
        const {setOrderBillingAddress: order} = await this.request(setOrderBillingAddressMutation, {input});
        this.$store.activeOrder = order;
        return order;
    }

    async getNextOrderStates() {
        const {nextOrderStates} = await this.request(nextOrderStatesQuery);
        return nextOrderStates;
    }

    async transitionOrderToState(state) {
        const {transitionOrderToState} = await this.request(transitionOrderToStateMutation, {state});
        this.validateResult(transitionOrderToState);
        this.$store.activeOrder = transitionOrderToState;
        return transitionOrderToState;
    }

    async addPaymentToOrder(input) {
        const {addPaymentToOrder} = await this.request(addPaymentToOrderMutation, {input});
        this.validateResult(addPaymentToOrder);
        this.$store.activeOrder = addPaymentToOrder;
        return addPaymentToOrder;
    }

    async getOrderByCode(code) {
        const {orderByCode} = await this.request(orderByCodeQuery, {code});
        return orderByCode;
    }

    async login(username, password) {
        const {login} = await this.request(loginQuery, {username, password});
        this.validateResult(login);
        return this.getActiveCustomer();
    }

    async logout() {
        await this.request(logoutMutation);
        return this.getActiveCustomer();
    }

    async getActiveCustomer() {
        const {activeCustomer} = await this.request(getActiveCustomerQuery);
        this.$store.activeCustomer = activeCustomer;
        return activeCustomer;
    }

    async register(input) {
        const {registerCustomerAccount} = await this.request(registerMutation, {input});
        this.validateResult(registerCustomerAccount);
        return registerCustomerAccount;
    }

    async submitReview(input) {
        await this.request(submitProductReviewMutation, {input});
    }

    async setOrderCustomFields(customfields) {
        const {setOrderCustomFields} = await this.request(setOrderCustomFieldsMutation, {customfields});
        this.validateResult(setOrderCustomFields);
        this.$store.activeOrder = setOrderCustomFields;
        return setOrderCustomFields;
    }

    async getAddress(input) {
        const { dutchAddressLookup } = await this.request(getDucthAddressQuery, { input });
        return dutchAddressLookup;
    }

    validateResult(result) {
        if (result && (result).errorCode) {
            throw Error(`${result.errorCode} - ${result.message}`);
        }
    }

    async request(document, variables) {
        let token = window.localStorage.getItem(this.tokenName);
        if (token) {
            this.client.setHeader('Authorization', `Bearer ${token}`);
        }
        const {data, headers, errors} = await this.client.rawRequest(document, variables);
        if (errors) {
            throw errors;
        }
        token = headers.get(this.tokenName);
        if (token) {
            window.localStorage.setItem(this.tokenName, token);
        }
        return data;
    }

}

/**
 * Set lowest price based on lowest price of variants and set soldout if all are sold out
 */
function setCalculatedFields(product) {
    const defaultPrice = Math.min(...product.variants.map(v => v.priceWithTax));
    const available = product.variants.find(v => v.available > 0);
    return {
        ...product,
        defaultPrice,
        soldOut: !available
    };
}

/**
 * Remove duplicate products from given list of products
 */
function deduplicate(products) {
    const uniq = [];
    return products.filter((prod) => {
        if (uniq.indexOf(prod.slug) === -1) {
            uniq.push(prod.slug);
            return true;
        }
        return false;
    });
}

module.exports = {
    Vendure,
    setCalculatedFields,
    deduplicate
}
