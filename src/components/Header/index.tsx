import { Logo, HeaderContainer } from './index.styles';
import { Subtotal } from './Subtotal';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/logo.svg" alt="logo" />
      <Subtotal />
    </HeaderContainer>
  );
};
