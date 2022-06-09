import React, { useState } from 'react';
import { providerType } from '../../state/slice/providerSlice'
import { useSelector } from 'react-redux';
import { selectProvidersState } from '../../state/slice/providerSlice'

interface IProductFormProps {
}

const ProductForm: React.FunctionComponent<IProductFormProps> = (props) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [unitsAvailable, setUnitsAvailable] = useState(0)
  const [price, setPrice] = useState(0)
  const [minUnitsAvailable, setMinUnitsAvailable] = useState(0)
  const [maxUnitsAvailable, setMaxUnitsAvailable] = useState(0)
  const [provider, setProvider] = useState('')


  const getProviders = useSelector(selectProvidersState())

  // onSubmit={(e) => onAdd(e)}

  return (
    <div>
      <form className='add-form' id="form" >

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
          <select className="optional-provider">
            {getProviders.map((provider) => <option > {provider.name}</option>)}
          </select>
        </div>
        <input type='submit' value='Save Product' className='btn-save' />

      </form>
    </div>
  )
};

export default ProductForm;
