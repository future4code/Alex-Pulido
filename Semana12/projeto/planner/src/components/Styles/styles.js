import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  > * {
    margin: 0 10px;
  }
`;

export const BodyPlanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  justify-content: center;

  div {
    border: 1px dashed black;
    border-bottom: 0;
    border-top: 0;
    min-height: 20vh;
    margin: 10px;
    padding: 10px;
    height: 50vh;
    min-width: 400px;
    font-size: 30px;
  }
`;

export const Done = styled.h1`
  text-decoration: line-through;
  color: green;
`;

export const ContainerDia = styled.div`
  border: 1px dashed black;
  border-bottom: 0;
  border-top: 0;
  min-height: 20vh;
  margin: 10px;
  padding: 10px;
  height: 50vh;
  min-width: 400px;
  font-size: 30px;
`;
