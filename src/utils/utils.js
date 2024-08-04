export const encodeParams = (params) => {
  return new URLSearchParams(params).toString();
};

export const decodeParams = (paramString) => {
  const params = new URLSearchParams(paramString);
  let decodedParams = {};
  for (let [key, value] of params.entries()) {
    decodedParams[key] = value;
  }
  return decodedParams;
};
