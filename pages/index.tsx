import React, { useState } from "react";
import { PostType } from "@/src/components/Post/PostTypes";
import Posts from "@/src/components/Posts/Posts";
import { useAppDispatch } from "@/src/redux/hooks";
import { RootState } from "@/src/redux/store";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { increment } from "@/src/redux/features/counter/counterSlice";

interface PageProps {
  posts: PostType[];
}

const Container = styled.div`
  width: 100wv;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

const ButtonCustom = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: yellowgreen;
  color: white;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 10px;
`;

const Page = ({ posts }: PageProps) => {
  const dispatch = useAppDispatch();
  const current = useSelector((state: RootState) => state.counter.value);
  const [myPosts, setMyPosts] = useState<PostType[]>(posts);

  const changeFirstPost = () => {
    setMyPosts((prev) => {
      return [
        { id: 1, body: "newBody", title: "newTitle", userId: 101 },
        ...prev.filter((post) => post.id !== 1),
      ];
    });
  };

  const addNewPost = () => {
    setMyPosts((prev) => {
      return [
        ...prev,
        {
          id: 101,
          body: "new body",
          title: "newTitle",
          userId: 101,
        },
      ];
    });
  };

  return (
    <Container>
      <div> current - {current}</div>
      <ButtonCustom
        onClick={() => {
          console.log("current increase");
          dispatch(increment());
        }}
      >
        Increase Current
      </ButtonCustom>

      <ButtonCustom onClick={addNewPost}>
        Add new post, and only rerender that post
      </ButtonCustom>
      <ButtonCustom onClick={changeFirstPost}>
        Change first post, and only rerender that post
      </ButtonCustom>
      {myPosts?.length === 0 ? (
        <div>Loading........</div>
      ) : (
        <Posts posts={myPosts} />
      )}
    </Container>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostType[] = await res.json();

  return {
    props: { posts: data },
  };
}

export default Page;
