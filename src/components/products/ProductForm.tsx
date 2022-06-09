import React, { useState } from 'react';
import { providerType } from '../../state/slice/providerSlice'
import { productType } from '../../state/slice/productSlice'
import { useSelector } from 'react-redux';
import { selectProvidersState } from '../../state/slice/providerSlice'
import { useAppDispatch } from '../../store'
import { nanoid } from '@reduxjs/toolkit';
import { addProduct } from '../../actions/products/addProduct'

interface IProductFormProps {
}

const ProductForm: React.FunctionComponent<IProductFormProps> = (props) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [unitsAvailable, setUnitsAvailable] = useState(0)
  const [price, setPrice] = useState(0)
  const [minUnitsAvailable, setMinUnitsAvailable] = useState(0)
  const [maxUnitsAvailable, setMaxUnitsAvailable] = useState(0)
  const [provider, setProvider] = useState({} as providerType)

  const getProviders = useSelector(selectProvidersState())

  const dispatch = useAppDispatch()

  const onAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    /*if(name && description && unitsAvailable && price && minUnitsAvailable && maxUnitsAvailable ){
        const newProduct: productType = {id: nanoid(), minUnits: minUnitsAvailable, maxUnits: maxUnitsAvailable, productName: name, 
          description: description, unitsAvailable: unitsAvailable, price: price, provider: provider}
          console.log(newProduct)
        dispatch(addProduct(newProduct))
        setName('')
    }*/

    console.log(provider)
  }

  return (
    <div>
      <form className='add-form' id="form" onSubmit={(e) => onAdd(e)} >

        <div className='form-control'>
          <label>Product Name</label>
          <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Product Name' value={name} />
        </div>

        <div className='form-control'>
          <label>Product Description</label>
          <input onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Product description' value={description} />
        </div>

        <div className='form-control'>
          <label>Units Available</label>
          <input onChange={(e) => setUnitsAvailable(Number(e.target.value))} type='number' placeholder='Units available' value={unitsAvailable} />
        </div>

        <div className='form-control'>
          <label>Product Price</label>
          <input onChange={(e) => setPrice(Number(e.target.value))} type='number' placeholder='Units available' value={price} />
        </div>

        <div className='form-control'>
          <label>Min Amount Units Available</label>
          <input onChange={(e) => setMinUnitsAvailable(Number(e.target.value))} type='number' placeholder='Units available' value={minUnitsAvailable} />
        </div>

        <div className='form-control'>
          <label>Max Amount Units Available</label>
          <input onChange={(e) => setMaxUnitsAvailable(Number(e.target.value))} type='number' placeholder='Units available' value={maxUnitsAvailable} />
        </div>

        <div className='form-control'>
          <label className=''>Provider's List</label>
          <select className="optional-provider" >
            {getProviders.map((provider) => <option key={provider.id} >
              {provider.name}
            </option>)}
          </select>
        </div>
        <input type='submit' value='Save Product' className='btn-save' />

      </form>
    </div>
  )
};

export default ProductForm;
