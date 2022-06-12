import React, { useState } from 'react';
import { productType, selectProductsState } from '../../state/slice/productSlice'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { providerType } from '../../state/slice/providerSlice';
import { receiptType } from '../../state/slice/receiptSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../store'
import { addReceipt } from '../../actions/receipt/addReceipt'
import { updateProduct } from '../../actions/products/updateProduct'
import { useNavigate } from "react-router-dom";
import * as moment from 'moment'


interface IPurchaseProductProps {
}

interface stateBecausePurchased {
    statePurchased: string
}

const PurchaseProduct: React.FunctionComponent<IPurchaseProductProps> = (props) => {
    const getProductos = useSelector(selectProductsState())
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const location = useLocation()
    const state = location.state as stateBecausePurchased
    const { statePurchased } = state
    
    const productSelectToPurchase = getProductos.find((product) => product.id === statePurchased) as productType

    //states to create the cereipt
    const [description, setDescription] = useState('')
    const [productId, setProductId] = useState(productSelectToPurchase.id)
    const [units, setUnits] = useState(0)
    const [provider, setProvider] = useState(productSelectToPurchase.provider as providerType)


    const onSaveReceipt = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (description && units && (units > 0) &&
            (units <= (productSelectToPurchase.maxUnits - productSelectToPurchase.unitsAvailable))) {

            let dateImpro = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
            const receiptToCreate: receiptType = {
                id: nanoid(),
                description: description,
                units: units,
                productId: productId,
                date: dateImpro,
                provider: provider,
            }

            //product with new current unitsAvailable updated
            const newUnits = productSelectToPurchase.unitsAvailable + units

            const productUnitsAvailable: productType = {
                id: productSelectToPurchase.id,
                minUnits: productSelectToPurchase.minUnits,
                maxUnits: productSelectToPurchase.maxUnits,
                productName: productSelectToPurchase.productName,
                description: productSelectToPurchase.description,
                unitsAvailable: newUnits,
                price: productSelectToPurchase.price,
                provider: productSelectToPurchase.provider,
            }

            dispatch(addReceipt(receiptToCreate))
            dispatch(updateProduct(productUnitsAvailable))

            navigate("/products")

        } else {
            const maxUnitsToBuy = productSelectToPurchase.maxUnits - productSelectToPurchase.unitsAvailable
            alert("You can't buy more than " + maxUnitsToBuy)
        }
    }

    return (
        <div>
            <form className='add-form' id="form" onSubmit={(e) => onSaveReceipt(e)}>

                <div className='form-control'>
                    <label>Purchase Description</label>
                    <input type='text' placeholder='Purchase Description' onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>

                <div className='form-control'>
                    <label>Units To Purchase</label>
                    <input type='text' placeholder='Units To Purchase' onChange={(e) => setUnits(Number(e.target.value))} value={units} />
                </div>

                <div className='form-control'>
                    <label >Product's Id</label>
                    <input disabled type='text' placeholder="Product's Id" value={productSelectToPurchase.id} />
                </div>

                <div className='form-control'>
                    <label>Provider's Name</label>
                    <input disabled type='text' placeholder="Provider's Name" value={productSelectToPurchase.provider.name} />
                </div>

                <div className='form-control'>
                    <label>Current Units</label>
                    <input disabled type='text' placeholder='Max Units Available' value={productSelectToPurchase.unitsAvailable} />
                </div>

                <div className='form-control'>
                    <label>Max Units Available</label>
                    <input disabled type='text' placeholder='Max Units Available' value={productSelectToPurchase.maxUnits} />
                </div>

                <input type='submit' value='Save Receipts' className='btn-save' />

            </form>
        </div>
    )
};

export default PurchaseProduct;
