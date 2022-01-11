import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderDiv = styled.div`
  border: 1px solid gray;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  background-color: lightgrey;
`;

export const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    width: 15vw;
    height: 25vh;
  }
`;

export const TypesCard = styled.div`
  text-align: center;
  background-color: lightgrey;

  h3 {
    display: flex;

    p {
      padding-left: 50px;
      padding-right: 50px;
      padding-bottom: 10px;
    }
  }
`;

export const StatsCard = styled.div`
  padding: 20px;
  font-size: 20px;
  background-color: lightgrey;

  h2 {
    text-align: center;
  }

  p {
    padding: 10px;
  }
`;

export const MovesCard = styled.div`
  padding: 20px;
  font-size: 20px;
  background-color: lightgrey;

  h2 {
    text-align: center;
  }

  p {
    font-weight: bold;
    text-align: center;
  }
`;

export const SecondaryContainer = styled.div`
  margin-top: -20px;
`;
