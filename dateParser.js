const isUnixTimestamp = (value) => {
  return !isNaN(+value);
};

const buildFromDate = (date) => {
  return {
    unix: date.valueOf(),
    utc: date.toUTCString(),
  };
};

const buildFromUnixTimestamp = (input) => {
  const unix = parseInt(input);
  const utc = new Date(unix).toUTCString();

  return {
    unix,
    utc,
  };
};

module.exports = (input) => {
  if (isUnixTimestamp(input)) {
    return buildFromUnixTimestamp(input);
  }

  return buildFromDate(new Date(input));
};
