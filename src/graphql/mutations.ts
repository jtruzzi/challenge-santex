import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      __typename
      ... on Order {
        id
        total
      }
      ... on ErrorResult {
        errorCode
        message
      }
      ... on InsufficientStockError {
        errorCode
        message
        quantityAvailable
      }
      ... on NegativeQuantityError {
        errorCode
        message
      }
      ... on OrderLimitError {
        errorCode
        message
      }
      ... on OrderModificationError {
        errorCode
        message
      }
    }
  }
`;
