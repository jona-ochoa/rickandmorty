import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  padding-top: 80px;
  padding-bottom: 40px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
`;
