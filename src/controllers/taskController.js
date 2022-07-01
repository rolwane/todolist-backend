const taskService = require('../services/taskService');

const getAllByUserId = async ({ body }, response) => {
  const serviceResponse = await taskService.getAllByUserId(body.id);
  return response.status(200).json(serviceResponse);
};

module.exports = {
  getAllByUserId,
};
