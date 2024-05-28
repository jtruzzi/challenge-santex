import { gql } from '@apollo/client';

export const GET_COLLECTION_PRODUCTS = gql`
  query GetCollectionProducts($input: SearchInput!) {
    search(input: $input) {
      items {
        productId
        productName
        description
        productVariantId
        productAsset {
          id
          preview
        }
        price {
          ... on SinglePrice {
            value
          }
        }
        currencyCode
        collectionIds
      }
    }
  }
`;

export const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      subTotal
    }
  }
`;
