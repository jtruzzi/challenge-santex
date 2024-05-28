import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SubtotalDisplay } from '../index.styles';
import { GET_ACTIVE_ORDER } from '../../../graphql/queries';
import useStateWithStorage from '../../../hooks/useStateWithStorage';

export const Subtotal: React.FC = () => {
  const [subtotal, setSubtotal] = useStateWithStorage('subtotal', 0);

  const { loading, data } = useQuery(GET_ACTIVE_ORDER, {
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data && data.activeOrder) {
      const newSubtotal = data.activeOrder.subTotal;
      setSubtotal(newSubtotal / 100);
    }
  }, [data, setSubtotal]);

  if (loading) return null;

  return (
    <SubtotalDisplay>
      <span>Order Subtotal</span>
      <br />
      <span>${subtotal}</span>{' '}
    </SubtotalDisplay>
  );
};
