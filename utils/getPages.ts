type GetPageReturnType = [number, number, boolean, boolean];

const getPages = (currentPage: number, pageLimit: number): GetPageReturnType => {
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const previousPageDisabled = currentPage === 1;
  const nextPageDisabled = currentPage === pageLimit;

  return [previousPage, nextPage, previousPageDisabled, nextPageDisabled];
};

export default getPages;
