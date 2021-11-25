export const getAllNotes = () => {
  return fetch("/api/notes").then(
    (response) => {
     
      return response.json();
    }
  );
};
