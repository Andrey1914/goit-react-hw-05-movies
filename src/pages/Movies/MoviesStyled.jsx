import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Form = styled.form`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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

export const SearchIcon = styled(AiOutlineSearch)`
  color: var(--text);
`;

export const Input = styled.input`
  width: 300px;
  height: 25px;
  font-size: 20px;
  border: none;
  border-bottom: 0.5px solid var(--text);
  background-color: var(--bg);
  color: var(--text);
  font: inherit;
  font-size: inherit;
  outline: none;
`;
