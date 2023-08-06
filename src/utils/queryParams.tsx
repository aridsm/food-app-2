const setURLQueryParams = (params: { [key: string]: string }) => {
  const url = new URL(location.href);
  const queryParams = {} as { [key: string]: string };

  for (const [key, value] of url.searchParams.entries()) {
    Object.assign(queryParams, { [key]: value });
  }

  Object.assign(queryParams, params);

  if (Object.keys(queryParams).length !== 0) {
    for (const key in queryParams) {
      url.searchParams.set(key, queryParams[key]);
    }
  }

  window.history.pushState({}, "", url);
};

export default setURLQueryParams;
