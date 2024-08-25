import { UserInfoBox } from "../components/userInfoBox.js";
import { Logo } from "../constants/svg/logo.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #131319;
  height: 100vh;
`;
const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Register = (props) => {
  let history = useNavigate();
  useEffect(() => {
    if (props.value.user) {
      history("/");
    }
  }, []);
  return (
    <AppContainer>
      <Contanier>
        <Logo />
        <UserInfoBox value={{ isLogin: false, user: props.value }} />
      </Contanier>
    </AppContainer>
  );
};
