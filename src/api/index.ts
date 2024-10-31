import { PostI } from "../types";

export const getPosts = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<{
  data: PostI[];
  hasMore: boolean;
}> => {
  const response = await fetch(
    `https://backend.tedooo.com/hw/feed.json?skip=${pageParam * 6}`
  );
  return await response.json();
};

export const sendImpression = async (postId: string) => {
  await fetch(`https://backend.tedooo.com/?itemId=${postId}`);
}