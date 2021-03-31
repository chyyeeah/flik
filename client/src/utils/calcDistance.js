const parsePixel = string => Number(string.split('px')[0]);

export default (targetX, targetY, mouseX, mouseY) => {
  const diffX = Math.abs(parsePixel(targetX) - mouseX);
  const diffY = Math.abs(parsePixel(targetY) - mouseY);
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};