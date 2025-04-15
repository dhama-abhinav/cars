import { Post } from "@/components/Post";

export default async function PostPage({ params }) {
  const ID = await params;
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Post</h1>
      <Post id={ID} />
    </div>
  );
}
