import React, { useState } from 'react';

interface IEditProductProps {
}

const EditProduct: React.FunctionComponent<IEditProductProps> = (props) => {

    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newUnitsAvailable, setNewUnitsAvailable] = useState(0)
    const [newPrice, setNewPrice] = useState(0)
    const [newMinnUnitsAvailable, setNewMinUnitsAvailable] = useState(0)
    const [newMaxUnitsAvailable, setNewMaxUnitsAvailable] = useState(0)

    return (
        <div>
            <form className='add-form' id="form" onSubmit={(e) => onUpdate(e)} >

                <div className='form-control'>
                    <label>Product Name</label>
                    <input onChange={(e) => setNewName(e.target.value)} type='text' placeholder='Product Name' value={newName} />
                </div>

                <div className='form-control'>
                    <label>Product Description</label>
                    <input onChange={(e) => setNewDescription(e.target.value)} type='text' placeholder='Product description' value={newDescription} />
                </div>

                <div className='form-control'>
                    <label>Units Available</label>
                    <input onChange={(e) => setNewUnitsAvailable(Number(e.target.value))} type='number' placeholder='Units available' value={newUnitsAvailable} />
                </div>

                <div className='form-control'>
                    <label>Product Price</label>
                    <input onChange={(e) => setNewPrice(Number(e.target.value))} type='number' placeholder='Units available' value={newPrice} />
                </div>

                <div className='form-control'>
                    <label>Min Amount Units Available</label>
                    <input onChange={(e) => setNewMinUnitsAvailable(Number(e.target.value))} type='number' placeholder='Units available' value={newMinnUnitsAvailable} />
                </div>

                <div className='form-control'>
                    <label>Max Amount Units Available</label>
                    <input onChange={(e) => setNewMaxUnitsAvailable(Number(e.target.value))} type='number' placeholder='Units available' value={newMaxUnitsAvailable} />
                </div>
                <input style ={{backgroundColor:'red'}}type='submit' value='Update product' className='btn-save' />
            </form>
        </div>
    )
};

export default EditProduct;
