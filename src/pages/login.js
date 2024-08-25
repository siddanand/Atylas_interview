import { UserInfoBox } from "../components/userInfoBox.js";
import { Logo } from "../constants/svg/logo.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContainer } from "../styles/commonStyle.js";
import { Contanier } from "../styles/loginStyle.js";

export const Login = (props) => {
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
        <UserInfoBox value={{ isLogin: true, user: props.value }} />
      </Contanier>
    </AppContainer>
  );
};
