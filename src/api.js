export const HOST = 'https://contacts-api-learn.herokuapp.com/api';

export const request = async (method = 'GET', body = null) => {
  const data = await fetch(`${HOST}/contacts`, {
    method,
    body,
  });
  const result = await data.json();

  if (!data.ok) {
    throw new Error(result.info);
  }
  return result;
};
