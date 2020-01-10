export function PostData(type, userData) {
  let BaseURL = "https://remotemysql.com/stats.php?dbid=C3SW7sDrmJ";
  let temp = "https://github.com/parixitsoni/feedback-system/blob/master/src/Database/php/react-php/api/index.php";
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
