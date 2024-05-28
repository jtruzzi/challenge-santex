import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { GET_COLLECTION_PRODUCTS } from '../../graphql/queries';
import { ProductList } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('ProductList', () => {
  it('shows an error message when the query fails', async () => {
    const productListMock = {
      request: {
        query: GET_COLLECTION_PRODUCTS,
      },
      error: new Error('error'),
    };
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[productListMock]} addTypename={false}>
          <ProductList />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Error loading products.')).toBeInTheDocument();
    });
  });

  it('shows the loading message', async () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <ProductList />
        </MockedProvider>
      </ThemeProvider>
    );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
