import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacings.l};
  padding-bottom: ${({ theme }) => theme.spacings.l};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.img`
  max-width: 200px;
  margin-left: 20px;
`;

export const SubtotalDisplay = styled.div`
  font-size: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-align: right;
  margin-right: 20px;
`;

export const MenuLink = styled(RouterLink)`
  padding: ${({ theme }) => theme.spacings.s} ${({ theme }) => theme.spacings.m};
  border-radius: 25px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: ${({ theme }) => theme.colors.text};
  font-size: inherit;
  cursor: pointer;
  outline: none;
  margin-top: auto;
  text-decoration: none;
  margin-left: 8px;
  margin-right: 8px;
`;
