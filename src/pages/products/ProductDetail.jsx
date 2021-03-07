import React, { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import BackendLayout from "../../components/layouts/backend/BackendLayout"
import api from "../../services/productAPI"

const ProductThumbnails = () => {
  const [product, setProduct] = useState([])

  let { id } = useParams()

  useEffect(() => {
    // api.getAllProduct().then((res) => setProduct(res.data))

    api.getProductById(id).then((res) => {
      console.log("me")
      console.log(res.data)

      return setProduct(res.data)
    })
  }, [])

  return (
    <BackendLayout title={"Product Detail #" + product.id}>
      <div>
        <h1 className="h3 mb-3">Product List!</h1>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top card-img-top"
                src={product.product_image}
                alt={product.product_name}
              />
              <div className="card-header">
                <h1 className="card-title mb-0 text-primary">
                  {product.product_name}
                </h1>
              </div>
              <div className="card-body">
                <p className="card-text ">{product.product_detail}</p>
                {/* <NavLink
                      to={"/products/" + product.product_id}
                      className="btn btn-primary"
                    >
                      Go somewhere
                    </NavLink> */}
                <div className="text-start">
                  THB {product.product_price}
                  <div className="text-end align-items-right">
                    in stock: {product.product_qty}
                  </div>
                </div>

                <div>
                  <div
                    className="btn-group "
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" className="btn btn-outline-primary">
                      -
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      +
                      <i className="bi-clock"></i>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackendLayout>
  )
}

export default ProductThumbnails
