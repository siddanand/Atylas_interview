import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #35373b;
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  background: #27292d;
  color: #ffffff;
  margin: 15px 0 15px 0;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  text-align: left;
  color: #c5c7ca;
`;
export const TextArea = styled.input`
  padding: 20px 10px 20px 10px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  border: none;
  background: transparent;
  transition: border-color 0.3s ease;
  width: 100%;
  color: #7f8084;
  &:focus {
    outline: none;
  }
`;

export const ContentContainer = styled.div`
  background: #191920;
  padding: 10px;
  display: flex;
  border-radius: 8px;
`;

export const EmojiContainer = styled.div`
  background: #27292d;
  line-height: 1.2;
  padding: 0 2px 0 2px;
  width: 48px;
  height: 48px;
  text-align: center;
  align-self: center;
  border-radius: 50%;
`;
export const Button = styled.input`
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
  &:hover {
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: 44px;
  height: 44px;
  margin-top: 10px;
  border-radius: 50%;
`;

export const NameContainer = styled.div`
  display: flex;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
  margin: 12px 0 10px 20px;
  color: #c5c7ca;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 0px;
    color: #7f8084;
  }
`;
export const CommentContainer = styled.div`
  display: flex;
  margin-top: 15px;
  p {
    margin: -1px -1px -1px 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #7f8084;
  }
`;

export const Content = styled.p`
  padding: 20px 10px 20px 10px;
  margin-left: 10px;
  background: transparent;
  width: 100%;
  color: #7f8084;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
