import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacings.m};
  padding: ${({ theme }) => theme.spacings.m};
  max-width: 1200px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fonts.body};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.m};
  border-radius: 10px;
  background: linear-gradient(
        ${({ theme }) => theme.colors.background},
        ${({ theme }) => theme.colors.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
      )
      border-box;
  border: 3px solid transparent;
  color: ${({ theme }) => theme.colors.text};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacings.s};
  border-radius: 10px;
  object-fit: cover;
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.fonts.heading};
  margin: ${({ theme }) => theme.spacings.s} 0 0;
`;

export const ProductDescription = styled.p`
  text-align: center;
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacings.s} ${({ theme }) => theme.spacings.m};
  border-radius: 25px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: ${({ theme }) => theme.colors.text};
  font-size: inherit;
  cursor: pointer;
  outline: none;
  margin-top: auto;
`;

export const ErrorMessage = styled.div`
  margin: auto;
  font-size: 30px;
  color: white;
  text-align: center;
`;
