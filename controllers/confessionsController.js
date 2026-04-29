const confessionsService = require('../services/confessionsService');

function createConfession(req, res) {
  const requestData = req.body;
  const result = confessionsService.createConfession(requestData);
  if (result.isJson) {
    return res.status(result.status).json(result.data);
  } else {
    return res.status(result.status).send(result.data);
  }
}

function getAllConfessions(req, res) {
  const result = confessionsService.getAllConfessions();
  return res.status(result.status).json(result.data);
}

function getConfessionById(req, res) {
  const confessionId = parseInt(req.params.id);
  const result = confessionsService.getConfessionById(confessionId);
  if (result.isJson) {
    return res.status(result.status).json(result.data);
  } else {
    return res.status(result.status).send(result.data);
  }
}

function getConfessionsByCategory(req, res) {
  const categoryName = req.params.cat;
  const result = confessionsService.getConfessionsByCategory(categoryName);
  return res.status(result.status).json(result.data);
}

function deleteConfession(req, res) {
  if (req.headers['x-delete-token'] !== process.env.DELETE_TOKEN) {
    return res.status(403).json({msg: 'no permission'});
  }

  const confessionId = req.params.id ? parseInt(req.params.id) : null;
  const result = confessionsService.deleteConfession(confessionId);
  if (result.isJson) {
    return res.status(result.status).json(result.data);
  } else {
    return res.status(result.status).send(result.data);
  }
}

module.exports = {
  createConfession,
  getAllConfessions,
  getConfessionById,
  getConfessionsByCategory,
  deleteConfession
};