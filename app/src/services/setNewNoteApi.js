let token = null;
const setToken = (newToken) => {
  token = "Bearer " + newToken;
};
const setNewNoteApi = (post) => {
  return fetch("/api/notes", {
    method: "post",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

export { setToken, setNewNoteApi };
