"use client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import Link, { useRouter } from "next/navigation";

export default function Posts() {
  const router = useRouter();
  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = async () => {
    const res = await fetch(url);
    return await res.json();
  };

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //refetch used to call api again

  if (isLoading) {
    return <p style={{ marginTop: "10px" }}>Loading ...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: "10px" }}>{error?.message} </p>;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <h1 className="text-center">Posts goes here</h1>

      <Button className={"ml-2"} onClick={() => router.push("/")}>
        Back to Home
      </Button>
      <Button className={"ml-2"} onClick={refetch}>
        Refetch
      </Button>

      {data?.map((item, index) => (
        <div
          style={{
            cursor: "pointer",
            margin: "20px",
            padding: "15px",
            backgroundColor: "hsl(0 0% 89.8%)",
            border: "1px solid black",
            borderRadius: "10px",
          }}
          onClick={() => router.push(`/posts/${item.id}`)}
          key={index}
        >
          <h3>Title : {item.title}</h3>
          <p> Body : {item.body}</p>
        </div>
      ))}
    </div>
  );
}
