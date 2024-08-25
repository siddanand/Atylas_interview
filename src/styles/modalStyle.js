import styled from "styled-components";

export const Overlay = styled.div`
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

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 0.75rem;
  transition: all 0.5s ease;
  z-index: 1;
`;
