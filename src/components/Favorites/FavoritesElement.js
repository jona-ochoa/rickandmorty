import styled from "styled-components";

export const FavContainer = styled.div`
  min-height: 100vh;
  /* display: grid;
  margin-top: 60px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  position: relative; */
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const FavContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FavContentCard = styled.section`
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
  position: relative;
`

export const SelectWrapper = styled.div`
  /* position: absolute;
  top: 15px;
  right: 30px; */
  display: flex;
  gap: 20px;
  outline: none;
  border: none;
  width: 300px;
  height: 30px;
  font-weight: 700;
`

export const Select = styled.select`
  width: 100%;
  color: #0000ff;
  font-size: 1rem;
  height: 30px;
`

export const SelectOptions = styled.option`
  height: 50px;
  font-size: 1em;
`
