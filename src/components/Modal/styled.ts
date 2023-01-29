import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(9, 24, 51, 0.57);
`;

export const Card = styled.div`
  min-height: 400px;
  min-width: 500px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 24px;

  background: white;
  border-radius: 8px;
`;
