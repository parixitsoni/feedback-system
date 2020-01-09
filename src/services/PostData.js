export function PostData(type, userData) {
  let BaseURL = "https://remotemysql.com:3036";
  return new Promise((resolve, reject) => {
    fetch(BaseURL + "?tp=" + type, {
      method: "POST",
      headers: {
        "Accept": "application/json;",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response =>
        response.json().then(res => {
          resolve(res);
        })
      )
      .catch(error => {
        reject(error);
      });
  });
}
