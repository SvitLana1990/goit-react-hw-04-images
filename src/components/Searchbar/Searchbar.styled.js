import styled from "styled-components";

export const SearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p=> p.theme.spacing(6)};
  padding-left: ${p=> p.theme.spacing(6)};
  padding-top: ${p=> p.theme.spacing(3)};
  padding-bottom: ${p=> p.theme.spacing(3)};
  color: ${p=> p.theme.colors.white};
  background-color: ${p=> p.theme.colors.blue};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p=> p.theme.colors.white};
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  width: 48px;
  height: 48px;
  padding: ${p=> p.theme.spacing(3)};
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  &:hover {
      opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${p=> p.theme.spacing(1)};
  padding-right: ${p=> p.theme.spacing(1)};
  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`;