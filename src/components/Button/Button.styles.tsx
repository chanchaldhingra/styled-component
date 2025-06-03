import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'outline' | 'default';
}

const StyledButton = styled.button<StyledButtonProps>`
  /* Example styles */
  background: ${({ variant }) => (variant === 'outline' ? 'transparent' : '#007bff')};
  color: ${({ variant }) => (variant === 'outline' ? '#007bff' : '#fff')};
  border: ${({ variant }) => (variant === 'outline' ? '2px solid #007bff' : 'none')};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export default StyledButton;