import { UserInfoBox } from "../components/userInfoBox";
import { Overlay, ModalContainer } from "../styles/modalStyle";

export const Modal = (props) => {
  return (
    <Overlay onClick={() => props.value.setShowModal(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <UserInfoBox
          value={{
            isLogin: props.value.isLogin,
            setIsLogin: props.value.setIsLogin,
            user: props.value.user,
            isModal: true,
            setShowModal: props.value.setShowModal,
          }}
        />
      </ModalContainer>
    </Overlay>
  );
};
