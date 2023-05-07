import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  margin-top: 60px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
