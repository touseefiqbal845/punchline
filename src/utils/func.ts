export const mergeContents = (
  completed_contents: any[],
  similar_contents: any[]
) => {
  const maxLength = Math.max(
    completed_contents.length,
    similar_contents.length
  );
  const showCompletedContents: any[] = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < completed_contents.length) {
      showCompletedContents.push(completed_contents[i]);
    }
    if (i < similar_contents.length) {
      showCompletedContents.push(similar_contents[i]);
    }
  }

  return showCompletedContents;
};

export const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
};
