import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { Subtotal } from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { GET_ACTIVE_ORDER } from '../../../graphql/queries';

const mockData = {
  request: {
    query: GET_ACTIVE_ORDER,
  },
  result: {
    data: {
      activeOrder: {
        subTotal: 5000,
      },
    },
  },
};

describe('Subtotal', () => {
  it('renders the correct subtotal when data is fetched and shows nothing when loading', async () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[mockData]} addTypename={false}>
          <Subtotal />
        </MockedProvider>
      </ThemeProvider>
    );

    expect(screen.queryByText('Order Subtotal')).toBeNull();
    expect(screen.queryByText('$50')).toBeNull();

    await waitFor(() => {
      expect(screen.getByText('Order Subtotal')).toBeInTheDocument();
      expect(screen.getByText('$50')).toBeInTheDocument();
    });
  });
});
