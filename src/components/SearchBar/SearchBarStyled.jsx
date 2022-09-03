import styled from '@emotion/styled';

export const Form = styled.form`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  width: 100%;
  max-width: 500px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  :focus {
    opacity: 1;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 25px;
  font-size: 20px;
  border: none;
  border-bottom: 0.5px solid #00000073;
  font: inherit;
  font-size: inherit;
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
`;
