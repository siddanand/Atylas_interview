import styled from "styled-components";
import { UserInfoBox } from "../components/userInfoBox";
import { CloseButton } from "../constants/svg/closeButton.js";

export const Modal = (props) => {
  const Overlay = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(52, 64, 84, 0.1);
    backdrop-filter: blur(2px);
    animation: fadein 0.5s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  const Modal = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    border-radius: 0.75rem;
    transition: all 0.5s ease;
    z-index: 1;
  `;

  // const CancelButton = styled.button`
  //   // Cancel button styles
  // `;

  return (
    <Overlay onClick={() => props.value.setShowModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <UserInfoBox
          value={{
            isLogin: props.value.isLogin,
            setIsLogin: props.value.setIsLogin,
            user: props.value.user,
            isModal: true,
            setShowModal: props.value.setShowModal,
          }}
        />
      </Modal>
    </Overlay>
  );
};
