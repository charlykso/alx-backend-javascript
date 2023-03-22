function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (resolve) { resolve(true); } else {
      reject(Error(false));
    }
  });
}
export default getResponseFromAPI;
