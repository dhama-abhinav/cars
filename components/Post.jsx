"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

export const Post = ({ id }) => {
  //   const params = useSearchParams();
  //   const id = params.get("id");
  const router = useRouter();
  const postID = id.id;

  const fetchPostByID = async (val) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${val}`
    );
    return await res.json();
  };

  const { data, isError, isFetched, isLoading, error } = useQuery({
    queryKey: ["posts", postID],
    queryFn: () => fetchPostByID(postID),
  });

  if (isLoading) {
    return <p style={{ marginTop: "10px" }}>Loading ...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: "10px" }}>{error?.message} </p>;
  }

  return (
    <div>
      <div>PostID -{postID} </div>
      <Button onClick={() => router.push("/posts")}>Back</Button>
      <div>
        <div
          style={{
            cursor: "pointer",
            margin: "20px",
            padding: "15px",
            backgroundColor: "hsl(0 0% 89.8%)",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <h3>Title : {data.title}</h3>
          <p> Body : {data.body}</p>
        </div>
      </div>
    </div>
  );
};
