import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'outline' | 'default';
}

export const StyledButton = styled.button<StyledButtonProps>`
  /* Example styles */
  background: ${({ variant }) => (variant === 'outline' ? 'transparent' : '#007bff')};
  color: ${({ variant }) => (variant === 'outline' ? '#007bff' : '#fff')};
  border: ${({ variant }) => (variant === 'outline' ? '2px solid #007bff' : 'none')};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const FancyButton = styled(StyledButton)`
  gradient: linear-gradient(45deg,rgb(118, 110, 125),rgb(14, 43, 92));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;