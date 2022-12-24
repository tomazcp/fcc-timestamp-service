const ERR_RESPONSE = {
  error: 'Invalid Date',
};

const validateDate = (req, res, next) => {
  const { date: input } = req.params;

  if (!isNaN(parseInt(input))) {
    return next();
  }

  const date = new Date(input);
  if (date.toString() === 'Invalid Date') {
    return res.json(ERR_RESPONSE);
  }

  return next();
};

module.exports = { validateDate };
