const parsePixel = string => Number(string.split('px')[0]);

export default (targetX, targetY, mouseX, mouseY, targetRadius) => {
  const diffX = Math.abs(parsePixel(targetX) - mouseX);
  const diffY = Math.abs(parsePixel(targetY) - mouseY);
  const distanceToCenter = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const targetDistance = distanceToCenter - targetRadius;
  return targetDistance > 0 ? targetDistance : 0;
};