export const getFilteredData = async () => {
  const response = await fetch(
    `localhost
    `,
    {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //storeId: storeConfig.storeId,
      }),
    }
  );
  console.log(response);
  return response.json();
};
