const formatDate = (data) => {
  const arr = data.split("T");
  const date = arr[0].split("-");
  const newDate = `${date[1]}/${date[2]}/${date[0]}`;
  return newDate;
};

const standardizeTime = (time) => {
  let newTime;
  const times = {
    13: 1,
    14: 2,
    15: 3,
    16: 4,
    17: 5,
    18: 6,
    19: 7,
    20: 8,
    21: 9,
    22: 10,
    23: 11,
  };

  for (const [key, value] of Object.entries(times)) {
    if (time === parseInt(key)) newTime = parseInt(value);
  }

  return newTime;
};

const CSTtoEST = (time) => {
  let newTime = time - 4;
  newTime = newTime.toString();
  const times = {
    "-1": 23,
    "-2": 22,
    "-3": 21,
    "-4": 20,
    "-5": 19,
  };

  for (const [key, value] of Object.entries(times)) {
    if (newTime === key) newTime = parseInt(value);
  }

  return newTime;
};

const AMorPM = (hour) => {
  let time;
  hour < 13 ? (time = "AM") : (time = "PM");
  return time;
};

const formatTime = (data) => {
  console.log(data);
  const arr = data.split("T");
  const time = arr[1].split(":");
  let hour = parseInt(time[0]);
  hour = CSTtoEST(hour);
  let timeOfDay = AMorPM(hour);
  if (hour > 12 && hour < 25) hour = standardizeTime(parseInt(hour));
  const newTime = `${hour}:${time[1]} ${timeOfDay}`;
  return newTime;
};

export { formatDate, formatTime };
