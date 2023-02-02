const getConfig = (): { publicRuntimeConfig: { apiURL: string }} => {
    return {
      publicRuntimeConfig: {
        apiURL: 'www.testUrl.com',
      },
    };
  };
  
  export default getConfig;
  