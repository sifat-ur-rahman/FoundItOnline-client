"use client";

import { useGetAllLostQuery } from "@/app/states/features/lost/lostApi";

function LostItem() {
  const { data, isLoading } = useGetAllLostQuery({ undefined });

  const lostData = data?.data;
  console.log({ lostData });
  return <div>LostItem</div>;
}

export default LostItem;
