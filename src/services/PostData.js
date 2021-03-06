export function PostData(type, userData) {
  let BaseURL = "https://github.com/parixitsoni/feedback-system/blob/master/src/services/config.php";
  
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
