const sortByDateAscending = (dataArray, key) => {
  const sortedArray = dataArray.sort((a, b) => {
    const dateA = new Date(a[key]);
    const dateB = new Date(b[key]);
    return dateB - dateA;
  });
  return sortedArray;
};

export default sortByDateAscending;
