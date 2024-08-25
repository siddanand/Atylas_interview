import styled from "styled-components";

export const Contanier = styled.div`
  padding: 5% 20% 0% 20%;
  overflow: auto;
`;

export const H1 = styled.h1`
  font-family: Inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 33.89px;
  text-align: left;
  color: #c5c7ca;
`;

export const H2 = styled.h2`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #7f8084;
  margin-bottom: 30px;
`;
export const Button = styled.button`
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  border-radius: 3px;
  border: none;
  width: 15%;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #4a96ff;
  color: white;
  align-self: flex-end;
  padding: 8px;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;
