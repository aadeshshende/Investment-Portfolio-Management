const SellService = async (order) => {

    const response = await axios.post('http://localhost:8080/api/orders',
    order,{
      headers:{ Authorization:sessionStorage.getItem('token')}
     });

     return response;
  };
  
  export default SellService;