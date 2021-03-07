import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import BackendLayout from "../../components/layouts/backend/BackendLayout"
import api from "../../services/productAPI"

const ProductDetail = () => {
  const [productRows, setProductRows] = useState([])
  useEffect(() => {
    // api.getAllProduct().then((res) => setProduct(res.data))


    api.getAllProduct().then((res) => { 
     
        
        const splitResult = res.data.map((x,i) => {
            return i % 3 === 0 ? res.data.slice(i, i+3) : null;
        }).filter(x => x != null);
        console.log(splitResult)
        return setProductRows(splitResult)


        // return setProduct(res.data)
    })
  }, [])


  

  return (
    <BackendLayout title="Product List">
      <div>
        <h1 className="h3 mb-3">Product List!</h1>


        { productRows.map((row, rowIndex) => 
        
        <div className="row" key={"row" + rowIndex }>
          {/* <div className="col-12"> */}

            {row.map((product, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={"card" + index} >
                <div className="card">
                  <img
                    className="card-img-top card-img-top"
                    src={product.product_image}
                    alt={product.product_name}
                  />
                  <div className="card-header">
                    <h1 className="card-title mb-0 text-primary">
                      { product.product_name } 
                    </h1>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-truncate">
                      { product.product_detail }
                    </p>
                    {/* <NavLink
                      to={"/products/" + product.product_id}
                      className="btn btn-primary"
                    >
                      Go somewhere
                    </NavLink> */}
                    <div className="text-start">
                        THB { product.product_price }
                        <div className="text-end align-items-right">
                        in stock: { product.product_qty }
                    </div>
                    </div>

                    

                  </div>
                </div>
              </div>
            ))}
          {/* </div> */}
        </div>
      
        )}
                
      </div>
    </BackendLayout>
  )
}

export default ProductDetail
