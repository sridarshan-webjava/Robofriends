export const apiCall = link =>
  fetch(link).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
