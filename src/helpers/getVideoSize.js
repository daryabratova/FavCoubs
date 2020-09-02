export const getVideoSize = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 550) {
    return [screenWidth, screenWidth];
  } else if (screenWidth < 996) {
    return [500, 600];
  } else {
    return [800, 600];
  }
};
