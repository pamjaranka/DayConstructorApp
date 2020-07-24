export const parseUnits = (data) => {
  if (typeof data !== 'String') {
    return data;
  }
  return JSON.parse(data);
};
