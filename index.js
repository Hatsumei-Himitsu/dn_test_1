const breakdownByType = (arr) => {
  let typesObj = {};

  for (let item of arr) {
    const type = item !== null ? typeof item : 'null'
    if (typesObj[type]) {
      typesObj[type].push(item);
    } else {
      typesObj[type] = [];
      typesObj[type].push(item);
    }
  }

  return typesObj;
};

const moreOrLess = (arr) => {
  let more = [];
  let less = [];
  const splitPoint = arr[0];

  for (item of arr) {
    item < splitPoint ? less.push(item) : more.push(item);
  }

  return {
    more,
    less,
  };
};

function func(arr, assert) {
  switch (assert) {
    case "breakdown by type":
      return breakdownByType(arr);
    case "more or less":
      return moreOrLess(arr);
    default:
      return breakdownByType(arr);
  }
}
