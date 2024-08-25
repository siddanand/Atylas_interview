import styled from "styled-components";

export const BorderContainer = styled.div`
  border-radius: 8px;
  border: double 4px transparent;
  background-image: linear-gradient(white, #27292d),
    linear-gradient(129.59deg, #969696 0%, #343434 98.18%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 27.5%;
  margin-top: 40px;
`;
export const Container = styled.div`
  padding: 20px;
  background: #27292d;
  color: #ffffff;
`;
export const H2 = styled.h2`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #6b6c70;
`;

export const H1 = styled.h1`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.78px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 36.94px;
  text-align: left;
  color: #c5c7ca;
`;
export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InputField = styled.input`
  padding: 15px 0px 15px 0px;
  border: 1.5px solid #35373b;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  background: transparent;
  transition: border-color 0.3s ease;
  width: 100%;
  color: white;
  text-indent: 10px;
  &:focus {
    border-color: #007bff;
  }
`;

export const PrimaryButton = styled.input`
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  border-radius: 3px;
  border: none;
  width: 100%;
  margin-top: 20px;
  background: #4a96ff;
  color: white;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;
export const HintText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
  color: #7f8084;
  cursor: pointer;
  span {
    color: #c5c7ca;
  }
`;
export const CloseButtonContainer = styled.div`
  float: right;
  cursor: pointer;
`;

export const PasswordField = styled.input`
  border: none;
  font-size: 1rem;
  outline: none;
  background: transparent;
  width: 100%;
  color: white;
  text-indent: 10px;
`;
export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px 15px 0px;
  border: 1.5px solid #35373b;
  border-radius: 4px;
  width: 100%;
`;

export const EyeIcon = styled.div`
  cursor: pointer;
  margin-right: 15px;
`;