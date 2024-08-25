import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CloseButton } from "../constants/svg/closeButton.js";
import {
  Container,
  BorderContainer,
  H2,
  H1,
  Label,
  LabelContainer,
  InputField,
  PrimaryButton,
  HintText,
  CloseButtonContainer,
  PasswordContainer,
  PasswordField,
  EyeIcon,
} from "../styles/userInfoBoxStyle.js";

export const UserInfoBox = (props) => {
  let history = useNavigate();
  const [username, setUsername] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    props.value.user.setUser(username);
    if (props.value.setShowModal) {
      props.value.setShowModal(false);
    }
    history("/");
  };

  return (
    <BorderContainer>
      <Container>
        {props.value.isLogin ? (
          <form onSubmit={onSubmit}>
            {props.value.isModal ? (
              <CloseButtonContainer
                onClick={() => props.value.setShowModal(false)}
              >
                <CloseButton />
              </CloseButtonContainer>
            ) : null}

            <H2>WELCOME BACK</H2>
            <H1>Log into your account</H1>
            <Label>Email or Username</Label>
            <InputField
              type="text"
              placeholder="Enter your email or username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <LabelContainer>
              <Label>Password</Label>
              <Label>Forgot Password?</Label>
            </LabelContainer>
            <PasswordContainer>
              <PasswordField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁️" : "🙈"}
              </EyeIcon>
            </PasswordContainer>
            <PrimaryButton type="submit" value="Login now" />
            {!props.value.isModal ? (
              <Link to="/register" style={{ textDecoration: "none" }}>
                <HintText>
                  Not registered yet? <span>Register →</span>
                </HintText>
              </Link>
            ) : (
              <HintText onClick={() => props.value.setIsLogin(false)}>
                Not registered yet? <span>Register →</span>
              </HintText>
            )}
          </form>
        ) : (
          <form onSubmit={onSubmit}>
            {props.value.isModal ? (
              <CloseButtonContainer
                onClick={() => props.value.setShowModal(false)}
              >
                <CloseButton />
              </CloseButtonContainer>
            ) : null}
            <H2>SIGN UP</H2>
            <H1>Create an account to continue</H1>
            <Label>Email</Label>
            <InputField type="email" placeholder="Enter your email" required />
            <Label>Username</Label>
            <InputField
              type="text"
              placeholder="Choose a preferred username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <LabelContainer>
              <Label>Password</Label>
              <Label>Forgot Password?</Label>
            </LabelContainer>
            <PasswordContainer>
              <PasswordField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁️" : "🙈"}
              </EyeIcon>
            </PasswordContainer>
            <PrimaryButton type="submit" value="Continue" />
            {!props.value.isModal ? (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <HintText>
                  Already have an account? <span>Login →</span>
                </HintText>
              </Link>
            ) : (
              <HintText onClick={() => props.value.setIsLogin(true)}>
                Already have an account? <span>Login →</span>
              </HintText>
            )}
          </form>
        )}
      </Container>
    </BorderContainer>
  );
};
