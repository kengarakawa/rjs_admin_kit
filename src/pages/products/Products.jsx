import React, { useState, useEffect } from "react"
import Swal from "sweetalert2"

import BackendLayout from "../../components/layouts/backend/BackendLayout"
import api from "../../services/productAPI"



const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    api.getAllProduct().then((res) =>
      // console.log(res) 
      setProducts(res.data)
    )
  }, [])



  const deleteButtonHandler = (id) => {

    Swal.fire({
      title: 'Do you want to delete product#' + id + '?',
      icon : 'warning' , 
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      customClass: {
        // cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      } 
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }

  return (
    <BackendLayout title="Product List">
      <div>
        <h1 className="h3 mb-3">Product List!</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Barcode</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr>
                        <td>
                          <img
                            src={product.product_image}
                            width={48}
                            height={48}
                            className="mr-2"
                            alt="Product"
                          />
                        </td>
                        <td>{product.product_name}</td>
                        <td>{product.product_barcode}</td>
                        <td>{product.product_price}</td>
                        <td>{product.product_qty}</td>
                        <td>
                          <button className="btn btn-sm btn-warning">Edit</button>
                          &nbsp;&nbsp;
                          <button className="btn btn-sm btn-danger" onClick={() => deleteButtonHandler(product.id)} >Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </BackendLayout>
  )
}

export default Products
