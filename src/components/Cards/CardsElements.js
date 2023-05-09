import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  margin-top: 60px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjzKsa3mzp5QUx4ua1kSDKlFL72_gwsfHSQ&usqp=CAU");
  background-size: cover;
  background-repeat: no-repeat; */
`;
