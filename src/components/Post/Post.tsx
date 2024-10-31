import React, { useEffect } from "react";
import { PostI } from "../../types";
import styled from "styled-components";
import Profile from "../Profile/Profile";
import LikeIcon from "./LikeIcon";
import ThumbsUpIcon from "./ThumbsUpIcon";
import MessageIcon from "./MessageIcon";
import { useInView } from "react-intersection-observer";
import { sendImpression } from "../../api";

const Wrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 7px 0px rgba(40, 47, 45, 0.07);
  border-radius: 0.25rem;
`;

const Header = styled.div`
  padding-inline: 1.5rem;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
`;

const AvatarAndName = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const NameAndShop = styled.div`
  display: flex;
  flex-direction: column;
  color: #282f2d;
`;

const Shop = styled.div`
  color: #949796;
`;

const Images = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  color: #737877;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Separator = styled.hr`
  margin-inline: 1.5rem;
  height: 1px;
  border: none;
  border-block-end: 1px solid #e9eaea;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  color: #484e4c;
`;

const ActionButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding-block: 1rem;
`;

interface LikeButtonProps {
  $didLike: boolean;
}

const LikeButton = styled(ActionButton)<LikeButtonProps>`
  ${({ $didLike }) => ($didLike ? "color: #0A66C2;" : "")};
`;

function Post({
    id,
  username,
  shopName,
  text,
  images,
  likes,
  comments,
  avatar,
  date,
  didLike,
}: PostI) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      sendImpression(id);
    }
  }, [id, inView]);

  return (
    <Wrapper ref={ref}>
      <Header>
        <AvatarAndName>
          <Profile src={avatar} alt="Avatar" />
          <NameAndShop>
            <div>{username}</div>
            <Shop>
              <a href="#">{shopName}</a> ·{" "}
              {new Date(date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Shop>
          </NameAndShop>
        </AvatarAndName>
        <div>{text}</div>
      </Header>
      <Images>
        {images.slice(0, 2).map((image) => {
          return (
            <ImageWrapper key={image}>
              <Image src={image} alt="Post" />
            </ImageWrapper>
          );
        })}
      </Images>
      <Footer>
        <Likes>
          <LikeIcon />
          {likes} Likes
        </Likes>
        <div>{comments} Comments</div>
      </Footer>
      <Separator />
      <Actions>
        <LikeButton $didLike={didLike}>
          <ThumbsUpIcon />
          Like
        </LikeButton>

        <ActionButton>
          <MessageIcon />
          Comment
        </ActionButton>
      </Actions>
    </Wrapper>
  );
}

export default Post;