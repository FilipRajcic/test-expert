export interface PostProps {
  post: PostType;
}
export interface PostType {
  body: string;
  id: number;
  title: string;
  userId: number;
}
