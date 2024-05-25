"use client";

import { useGetAllLostQuery as useGetAllFoundQuery } from "@/app/states/features/lost/lostApi";

function FoundItem() {
  const { data, isLoading } = useGetAllFoundQuery({ undefined });

  const foundData = data?.data;
  console.log({ foundData });
  return <div>FoundItem</div>;
}

export default FoundItem;
