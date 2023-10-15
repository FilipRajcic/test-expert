import React, { memo } from "react";
import { PostProps } from "./PostTypes";
import { PostContainer } from "./PostStyle";

const Post = ({ post }: PostProps) => {
  console.log("render post ", post.id);
  return (
    <PostContainer aria-label="PostContainer" key={post.id}>
      {post.id} : {post.body}
    </PostContainer>
  );
};

const checkProps = (prevProps: PostProps, newProps: PostProps) => {
  return (
    prevProps.post.id === newProps.post.id &&
    prevProps.post.title === newProps.post.title &&
    prevProps.post.userId === newProps.post.userId &&
    prevProps.post.body === newProps.post.body
  );
};
export default memo(Post, checkProps);
