import React, { memo } from "react";
import { PostsProps } from "./PostsTypes";
import Post from "../Post/Post";
import { PostsContainer } from "./PostsStyle";

const Posts = ({ posts }: PostsProps) => {
  console.log("render postssss");
  return (
    <PostsContainer aria-label="PostsContainer">
      {posts?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </PostsContainer>
  );
};

export default memo(Posts);
