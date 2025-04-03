"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const AddCarForm = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("cars/create")}>
        <Plus /> Add Car
      </Button>
    </div>
  );
};
