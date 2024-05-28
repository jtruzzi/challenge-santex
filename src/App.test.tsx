import { MockedProvider } from '@apollo/client/testing';
import { act, render } from '@testing-library/react';
import { ProductList } from './components/ProductList';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

describe('ProductList', () => {
  it('renders text and button', async () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <ProductList />
        </MockedProvider>
      </ThemeProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  });
});
