import { urlApi } from "./../constants/config.js";
const callapi = (uri , method, data) =>{
    return axios ({
        url: `${urlApi}/${uri}`,
        method,
        data,

    });
}




const getListProduct = () => {
    return axios ({
        url:"http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham",
        method: "GET"
    });
};



const deleteProduct = (id) => {
    return axios({
        url:`http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham/${id}`,
        method:"DELETE"
    });
};

const getProductById = (id) => {
    return axios ({
        url:`http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham/${id}`,
        method:"GET"
    })
}

const updateProduct = (id, product) =>{
    return axios({
        url:`http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham/${id}`,
        method:"PUT",
        data: product
    });
}

const addProduct =  (product)=>{
    return axios ({
        url:`http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham`,
        method:"POST",
        data: product
    });
}

export {getListProduct  , deleteProduct, getProductById, updateProduct,addProduct, callapi}


