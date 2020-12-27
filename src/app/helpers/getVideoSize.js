export const getVideoSize = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 550) {
    return [screenWidth, screenWidth];
  }

  if (screenWidth < 996) {
    return [500, 600];
  }

  return [800, 600];
};
