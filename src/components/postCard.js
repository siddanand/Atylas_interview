import { useState } from "react";
import { ThreeDots } from "../constants/svg/threeDots.js";
import { Comment } from "../constants/svg/comment.js";
import {
  Container,
  H1,
  TextArea,
  ContentContainer,
  EmojiContainer,
  Button,
  Image,
  IconContainer,
  CommentContainer,
  NameContainer,
  H3,
  Content,
} from "../styles/postCardStyle.js";

export const PostCard = (props) => {
  const [postContent, setPostContent] = useState("");
  let postInfo = props.value?.postInfo;

  return (
    <div>
      {props.value.isNewPost ? (
        <Container>
          <H1>Create Post</H1>
          <ContentContainer>
            <EmojiContainer>
              <p>💬</p>
            </EmojiContainer>
            <TextArea
              type="textarea"
              placeholder="How are you feeling today?"
            />
          </ContentContainer>
          <Button type="submit" value="Post" />
        </Container>
      ) : (
        <Container>
          <IconContainer>
            <NameContainer>
              <Image src={postInfo.image} height="100px" width="auto" />
              <H3>
                {postInfo.name}
                <br />
                <p>{postInfo.time}</p>
              </H3>
            </NameContainer>
            <ThreeDots />
          </IconContainer>
          <ContentContainer>
            <EmojiContainer>{postInfo.emoji}</EmojiContainer>
            <Content>{postInfo.content}</Content>
          </ContentContainer>
          <CommentContainer>
            <Comment />
            <p>{postInfo.comments} comments</p>
          </CommentContainer>
        </Container>
      )}
    </div>
  );
};
