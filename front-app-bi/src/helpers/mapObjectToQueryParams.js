export const mapObjectToQueryParams = (obj) => {
  let str = "";
  for (var key in obj) {
    if (obj[key] != null) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + obj[key];
    }
  }
  return str;
};