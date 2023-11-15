import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p=> p.theme.spacing(4)};
  padding-bottom: ${p=> p.theme.spacing(6)};
`;