import React from 'react';
import { Spinner, SpinnerWrapper } from './index.styles';

const Loading: React.FC = () => {
  return (
    <div data-testid="loading-spinner">
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    </div>
  );
};

export default Loading;
