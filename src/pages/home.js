import { PostCard } from "../components/postCard.js";
import { Posts } from "../constants/post.js";
import { useState } from "react";
import { Modal } from "../widgets/modal.js";
import { Link } from "react-router-dom";
import { AppContainer } from "../styles/commonStyle.js";
import { Contanier, H1, H2, Button } from "../styles/homeStyle.js";

export const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <AppContainer>
      <Contanier>
        {props.value.user ? (
          <Button
            type="submit"
            value="Post"
            onClick={() => props.value.setUser()}
          >
            <Link to="login" style={{ textDecoration: "none", color: "white" }}>
              Logout
            </Link>
          </Button>
        ) : (
          <Button
            type="submit"
            value="Post"
            onClick={() => props.value.setUser()}
          >
            <Link to="login" style={{ textDecoration: "none", color: "white" }}>
              Login
            </Link>
          </Button>
        )}
        <H1>Hello {props.value.user ? props.value.user : <span>XYZ</span>}</H1>
        <H2>
          How are you doing today? Would you like to share something with the
          community 🤗
        </H2>
        {showModal ? (
          <Modal
            value={{
              setShowModal,
              user: props.value,
              isLogin,
              setIsLogin: setIsLogin,
            }}
          />
        ) : null}
        <div
          onClick={() => {
            if (!props.value.user) {
              setShowModal(true);
            }
          }}
        >
          <PostCard value={{ isNewPost: true }} />
          {Posts.map((item) => {
            return <PostCard key={item.id} value={{ postInfo: item }} />;
          })}
        </div>
      </Contanier>
    </AppContainer>
  );
};
