const checkId = (req, res, next, id) => {
  const someId = id || req.params.id;
  res.locals.id = someId;
  next();
};

module.exports = { checkId };
