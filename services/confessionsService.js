const ALLOWED_CATEGORIES = ["bug", "deadline", "imposter", "vibe-code"];
let confessions = [];
let nextId = 0;

function createConfession(requestData) {
  if (!requestData) return { status: 400, isJson: true, data: {msg: 'bad'} };
  if (!requestData.text) return { status: 400, isJson: true, data: {msg: 'need text'} };
  if (requestData.text.length >= 500) return { status: 400, isJson: true, data: { error: "text too big, must be less than 500 characters long buddy" } };
  if (requestData.text.length <= 0) return { status: 400, isJson: false, data: "too short" };
  if (!ALLOWED_CATEGORIES.includes(requestData.category)) return { status: 400, isJson: false, data: "category not in stuff" };

  const newConfession = {
    id: ++nextId,
    text: requestData.text,
    category: requestData.category,
    created_at: new Date()
  };
  confessions.push(newConfession);
  console.log("added one info " + newConfession.id);
  return { status: 201, isJson: true, data: newConfession };
}

function getAllConfessions() {
  const sortedConfessions = confessions.sort((a, b) => b.created_at - a.created_at);
  const responsePayload = {
    data: sortedConfessions,
    count: sortedConfessions.length
  };
  console.log("fetching all data result");
  return { status: 200, isJson: true, data: responsePayload };
}

function getConfessionById(confessionId) {
  const foundConfession = confessions.find(confession => confession.id === confessionId);
  if (foundConfession) {
    if (foundConfession.text) {
      console.log("found info with " + foundConfession.text.length + " chars");
      return { status: 200, isJson: true, data: foundConfession };
    } else {
      return { status: 500, isJson: false, data: "broken" };
    }
  } else {
    return { status: 404, isJson: true, data: {msg: 'not found'} };
  }
}

function getConfessionsByCategory(categoryName) {
  if (ALLOWED_CATEGORIES.includes(categoryName)) {
    const filteredConfessions = confessions.filter(confession => confession.category === categoryName).reverse();
    return { status: 200, isJson: true, data: filteredConfessions };
  } else {
    return { status: 400, isJson: true, data: {msg: 'invalid category'} };
  }
}

function deleteConfession(confessionId) {
  if (!confessionId) return { status: 400, isJson: false, data: "no id" };
  
  const confessionIndex = confessions.findIndex(item => item.id === confessionId);
  if (confessionIndex !== -1) {
    const deletedConfession = confessions.splice(confessionIndex, 1);
    console.log("deleted something");
    return { status: 200, isJson: true, data: {msg: "ok", item: deletedConfession[0]} };
  } else {
    return { status: 404, isJson: true, data: {msg: "not found buddy"} };
  }
}

module.exports = {
  createConfession,
  getAllConfessions,
  getConfessionById,
  getConfessionsByCategory,
  deleteConfession
};