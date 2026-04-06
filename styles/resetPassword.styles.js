import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const Form = styled.form`
  padding: 2.5rem 3rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 255, 195, 0.6);
  width: 380px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: var(--foreground);

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 320px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    max-width: 100%;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #00ffc3;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #222;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  gap: 0.4rem;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: #00ffc3;
  }

  svg {
    color: #00ffc3;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.6rem;
    
    svg {
      font-size: 0.9rem;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1rem;
  outline: none;
  color: #eee;
  line-height: 1.4;
  padding-right: 2.4rem;

  &::placeholder {
    color: #666;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const PasswordToggleButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #555;
  transition: color 0.2s ease;

  &:hover {
    color: #00ffc3;
  }

  @media (max-width: 768px) {
    right: 14px;
  }

  @media (max-width: 480px) {
    right: 12px;
  }
`;

export const Button = styled.button`
  margin-top: 0.2rem;
  padding: 0.75rem 0;
  background-color: #00ffc3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  color: #111;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #00ccaa;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.6rem 0;
  }
`;

export const BackLink = styled.button`
  margin-top: 0.6rem;
  background: none;
  border: none;
  color: #00ffc3;
  cursor: pointer;
  padding: 0;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;