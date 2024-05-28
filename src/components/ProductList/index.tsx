import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  GridContainer,
  ProductCard,
  ProductName,
  ProductImage,
  ProductDescription,
  Button,
  ErrorMessage,
} from './index.styles';
import {
  GET_COLLECTION_PRODUCTS,
  GET_ACTIVE_ORDER,
} from '../../graphql/queries';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { Product } from '../../types';
import Loading from '../Loading';

export const ProductList: React.FC = () => {
  const {
    loading: queryLoading,
    error,
    data,
  } = useQuery(GET_COLLECTION_PRODUCTS, {
    variables: {
      input: {
        collectionSlug: 'electronics',
        groupByProduct: false,
        skip: 0,
        take: 10,
      },
    },
  });
  const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER, {
    refetchQueries: [{ query: GET_ACTIVE_ORDER }],
  });
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const handleBuyItem = (productVariantId: string) => {
    setLoadingProductId(productVariantId);
    addItemToOrder({ variables: { productVariantId, quantity: 1 } })
      .then((response) => {
        console.log('Item added to order:', response.data.addItemToOrder);
        setLoadingProductId(null);
      })
      .catch((error: any) => {
        console.error('Failed to add item to order:', error);
        setLoadingProductId(null);
      });
  };

  if (queryLoading) return <Loading />;
  if (error) return <ErrorMessage>Error loading products.</ErrorMessage>;

  return (
    <GridContainer>
      {data?.search.items.map((product: Product) => (
        <ProductCard key={product.productVariantId}>
          <ProductImage
            src={product.productAsset.preview}
            alt={product.productName}
          />
          <ProductName>{product.productName}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <Button
            onClick={() => handleBuyItem(product.productVariantId)}
            disabled={loadingProductId === product.productVariantId}
          >
            {loadingProductId === product.productVariantId
              ? 'Adding to order...'
              : `Add for ${product.price.value / 100} ${product.currencyCode}`}
          </Button>
        </ProductCard>
      ))}
    </GridContainer>
  );
};
