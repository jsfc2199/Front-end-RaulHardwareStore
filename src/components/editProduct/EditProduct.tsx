import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { productType, selectProductsState } from '../../state/slice/productSlice'
import { providerType } from '../../state/slice/providerSlice'
import { useAppDispatch } from '../../store'
import { updateProduct } from '../../actions/products/updateProduct'
import { useNavigate } from "react-router-dom";

interface stateBecauseEdit {
    stateEdit: string
}

const EditProduct: React.FunctionComponent = () => {

    //props after click in edit
    const location = useLocation()
    const state = location.state as stateBecauseEdit;
    const { stateEdit } = state


    //global state of products
    const getProducts = useSelector(selectProductsState())

    //product to update
    const productToUpdate = getProducts.find((product) => product.id === stateEdit) as productType

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [id, setId] = useState(productToUpdate.id)
    const [newName, setNewName] = useState(productToUpdate.productName)
    const [newDescription, setNewDescription] = useState(productToUpdate.description)
    const [newUnitsAvailable, setNewUnitsAvailable] = useState(productToUpdate.unitsAvailable)
    const [newPrice, setNewPrice] = useState(productToUpdate.price)
    const [newMinnUnitsAvailable, setNewMinUnitsAvailable] = useState(productToUpdate.minUnits)
    const [newMaxUnitsAvailable, setNewMaxUnitsAvailable] = useState(productToUpdate.maxUnits)
    const [provider, setProvider] = useState(productToUpdate.provider as providerType)


    const onUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newName && newDescription && newUnitsAvailable && newPrice && newMinnUnitsAvailable && newMaxUnitsAvailable && (newUnitsAvailable < newMaxUnitsAvailable) &&
            (newUnitsAvailable >= 0 && newPrice > 0 && newMinnUnitsAvailable >= 0 && newMaxUnitsAvailable > 0)) {
            const productUpdated: productType = {
                id: id,
                minUnits: newMinnUnitsAvailable,
                maxUnits: newMaxUnitsAvailable,
                productName: newName,
                description: newDescription,
                unitsAvailable: newUnitsAvailable,
                price: newPrice,
                provider: provider
            }
            
            dispatch(updateProduct(productUpdated))
            
            navigate("/products")

        } else {
            alert("invalid fields")
        }
    }

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
                <input type='submit' value='Update Product' className='btn-save' />
            </form>
        </div>
    )
};

export default EditProduct;
