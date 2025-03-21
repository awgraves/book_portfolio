export const useZoomedImgUrl = () =>
  useState<string | null>("zoomedImgUrl", () => null);
