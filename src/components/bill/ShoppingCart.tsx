import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { productType, selectProductsState } from '../../state/slice/productSlice'
import { updateProduct } from '../../actions/products/updateProduct';
import { billType } from '../../state/slice/billSlice';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
import { addBill } from '../../actions/bill/addBill';
import { clearShoppingCart } from '../../state/slice/shoppingSlice';
import { useNavigate } from 'react-router-dom';

interface IShoppingCarProps {
}

const ShoppingCar: React.FunctionComponent<IShoppingCarProps> = (props) => {

  const dispatch = useAppDispatch()
  const { productsCart } = useSelector((state: RootState) => state.shoppingCart)

  //global state of products
  const getProducts = useSelector(selectProductsState())

  //states to create the bill
  const [clientName, setClientName] = useState('')
  const [sellertName, setSellerName] = useState('')

  const navigate = useNavigate()

  const onBuy = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (clientName && sellertName) {

      let dateImpro = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
      const billToAdd: billType = {
        id: nanoid(),
        clientName: clientName,
        seller: sellertName,
        date: dateImpro,
        productsBought: productsCart.map(product => product.product),
        totalPaid: productsCart.reduce((aum, product) => product.product.price + aum, 0),
      }

      productsCart.forEach(shopProduct => {
        const product = shopProduct.product

        let productUpdated: productType = {
          ...product,
          unitsAvailable: product.unitsAvailable - shopProduct.amount
        }
        if (productUpdated.unitsAvailable > 0) {
          if (productUpdated.unitsAvailable < productUpdated.minUnits) {
            alert("You need to buy supplies because the product has less units available than the minimum units available")
          }
          dispatch(updateProduct(productUpdated))
          
          dispatch(clearShoppingCart())
          navigate('/bills')
        }
        else {
          alert("You can't sell " + productUpdated.productName + " because you don't have enought products of them")
          dispatch(clearShoppingCart())
          navigate('/products')
        }
      })
      dispatch(addBill(billToAdd))
    }else{
      alert("Please enter the client name and seller name")
    }
  }

  return (
    <div>
      <form onSubmit={(e) => onBuy(e)}>
        <div className='form-control'>
          <label>Client's Name</label>
          <input onChange={(e) => setClientName(e.target.value)} type='text' placeholder="Client's Name" value={clientName} />
        </div>

        <div className='form-control'>
          <label>Seller's Name</label>
          <input onChange={(e) => setSellerName(e.target.value)} type='text' placeholder="Seller's Name" value={sellertName} />
        </div>

        <div className='form-control'>
          <label>Products Bought</label>
          <select className="optional-provider">
            <option disabled selected> Product List in Cart </option>
            {productsCart.map((product) => <option disabled key={product.product.id} value={product.product.id}>
              {product.product.productName}
            </option>)}
          </select>
        </div>

        <div className='form-control'>
          <label>Total</label>
          <input disabled type='text' placeholder='Total' value={productsCart.reduce((aum, product) => product.product.price + aum, 0)} />
        </div>
        <input type='submit' value='Save Bill' className='btn-save' />
      </form>
    </div>
  )
};

export default ShoppingCar;
