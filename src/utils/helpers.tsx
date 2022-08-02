export const renderPriceRange = (min: string, max: string): string => {
  const parsedMin = Math.round(parseInt(min, 10));
  const parsedMax = Math.round(parseInt(max, 10));

  if (!min && !max) {
    return 'No Price Range Available';
  }
  if (min && max) {
    return `¥${parsedMin} - ¥${parsedMax}`;
  }
  if (min) {
    return `Starting at ¥${parsedMin}`;
  }
  return `Up to ¥${parsedMax}`;
};
