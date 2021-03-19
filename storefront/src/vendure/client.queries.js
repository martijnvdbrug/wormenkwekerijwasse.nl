const {productFields} = require('./server.queries');

const orderFields = `
{
    id
    code
    state
    active
    totalWithTax
    subTotalWithTax
    shippingWithTax
    customer {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
    }
    shippingAddress {
      company
      streetLine1
      streetLine2
      city
      postalCode
      country
    }
    billingAddress {
      company
      streetLine1
      streetLine2
      city
      postalCode
      country
    }
    shippingLines {
      shippingMethod {
        id
        code
        name
      }
    }
    lines {
      id
      quantity
      linePriceWithTax
      featuredAsset {
        id
        preview
      }
      productVariant {
        id
        sku
        name
        priceWithTax
        product {
          id
          name
        }
      }
    }
    payments {
      id
      state
      errorMessage
      metadata
    }
    taxSummary {
      description
      taxRate
      taxBase
      taxTotal        
    }
    discounts {
     description
     amount
    }
    customFields {
      customerNote
    }
  }
`;

const getStockForProductsQuery = `{
    products {
        items {
            id
            slug
            variants {
                id
                available
                priceWithTax
            }
        }
    }
}`;

const getProductQuery = `
    query product($slug: String) {
        product(slug: $slug) ${productFields}
    }`;

const addItemToOrderMutation = `
    mutation additemToOrder($productVariantId: ID!, $quantity: Int!){
        addItemToOrder(productVariantId: $productVariantId, quantity: $quantity ) {
            ... on Order ${orderFields}
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }`;

const getActiveOrderQuery = `
    query activeOrder {
        activeOrder ${orderFields}
    }
`;

const eligibleShippingMethodsQuery = `
    {
        eligibleShippingMethods {
            id
            price
            priceWithTax
            name
            metadata
        }
    }`;

const setOrderShippingMethodMutation = `
    mutation setOrderShippingMethod($shippingMethodId: ID!){
        setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
            ... on Order ${orderFields}
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }`;

const adjustOrderLineMutation = `
    mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!){
        adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
            ... on Order ${orderFields}
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }`;

const setCustomerForOrderMutation = `
    mutation setCustomerForOrder($input: CreateCustomerInput!){
        setCustomerForOrder(input: $input) {
            ... on Order ${orderFields}
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }`;

const updateCustomerForOrderMutation = `
    mutation updateCustomer($input: UpdateCustomerInput!){
      updateCustomer(input:$input) {
        id
        title
        firstName
        lastName
        phoneNumber
        emailAddress       
      }
}`;

const createCustomerAddressMutation = `
mutation createCustomerAddress($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    id
  }
}`;

const updateCustomerAddressMutation = `
mutation updateCustomerAddress($input: UpdateAddressInput!) {
  updateCustomerAddress(input: $input) {
    id
  }
}`;


const setOrderShippingAddressMutation = `
    mutation setOrderShippingAddress($input: CreateAddressInput!){
        setOrderShippingAddress(input: $input) {
            ... on Order  ${orderFields}
            ... on NoActiveOrderError {
                errorCode
                message
            }
        }
    }`;

const setOrderBillingAddressMutation = `
    mutation setOrderBillingAddress($input: CreateAddressInput!){
        setOrderBillingAddress(input: $input) {
            ... on Order  ${orderFields}
            ... on NoActiveOrderError {
                errorCode
                message
            }
        }
    }`;

const nextOrderStatesQuery = `
    {
        nextOrderStates
    }`;

const transitionOrderToStateMutation = `
    mutation transitionOrderToState($state: String!){
        transitionOrderToState(state: $state) {
            ... on Order ${orderFields}
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }`;

const addPaymentToOrderMutation = `
    mutation addPaymentToOrder($input: PaymentInput!){
        addPaymentToOrder(input: $input) {
            ... on Order ${orderFields}
            ... on ErrorResult {
                errorCode
                message
            }
        }
    }`;

const orderByCodeQuery = `
    query orderByCode($code: String!){
        orderByCode(code: $code) ${orderFields}
    }`;

const submitProductReviewMutation = `
    mutation submitProductReview($input: SubmitProductReviewInput!) {
  submitProductReview(input: $input) {
    id
  }
}`;

const loginMutation = `
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ... on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
`;

const getActiveCustomerQuery = `
{
  activeCustomer {
    id
    emailAddress
    firstName
    lastName
    phoneNumber
    addresses {
      id
      company
      streetLine1
      streetLine2
      city
      postalCode
      country {
        id
        code
      }
      defaultShippingAddress
    }
  }
}
`;

const logoutMutation = `
mutation {
  logout {
    success
  }
}
`;

const registerMutation = `
mutation registerCustomerAccount($input: RegisterCustomerInput!){
  registerCustomerAccount(input: $input) {
    ...on Success {
      success
    }
    ...on ErrorResult {
      errorCode
      message
    }
  }
}`;

const resetPasswordMutation = `
mutation resetPassword($token: String!, $password: String!){
  resetPassword(token: $token, password:$password) {
    ...on ErrorResult {
      errorCode
      message
    }
  }
}
`;

const requestPasswordResetMutation = `
mutation requestPasswordReset($emailAddress: String!){
  requestPasswordReset(emailAddress: $emailAddress) {
    ...on Success {
      success
    }
    ...on ErrorResult {
      errorCode
      message
    }
  }
}
`;

const setOrderCustomFieldsMutation = `
mutation setOrderCustomFields($note: String) {
  setOrderCustomFields(input: {customFields: {customerNote: $note}}){ 
    ... on Order  ${orderFields}
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
`;


module.exports = {
    getStockForProductsQuery,
    getProductQuery,
    addItemToOrderMutation,
    getActiveOrderQuery,
    eligibleShippingMethodsQuery,
    setOrderShippingMethodMutation,
    adjustOrderLineMutation,
    setCustomerForOrderMutation,
    setOrderShippingAddressMutation,
    nextOrderStatesQuery,
    transitionOrderToStateMutation,
    addPaymentToOrderMutation,
    orderByCodeQuery,
    submitProductReviewMutation,
    loginQuery: loginMutation,
    getActiveCustomerQuery,
    logoutMutation,
    updateCustomerForOrderMutation,
    createCustomerAddressMutation,
    updateCustomerAddressMutation,
    registerMutation,
    resetPasswordMutation,
    requestPasswordResetMutation,
    setOrderBillingAddressMutation,
    setOrderCustomFieldsMutation
};