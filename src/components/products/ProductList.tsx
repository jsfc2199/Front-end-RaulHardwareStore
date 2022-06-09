import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store'
import { posibleStatus } from '../../state/slice/providerSlice'
import { useSelector } from 'react-redux';
import { selectProductsFetchError, selectProductsStatus, selectProductsState } from '../../state/slice/productSlice'
import { getAllProducts } from '../../actions/products/getAllProducts'
import Product from './Product';
import ProductForm from './ProductForm';
import { providerType } from '../../state/slice/providerSlice'


interface IProductListProps {
}

type productsFormPropsType = {
    props: providerType
  }
  

const ProductList: React.FunctionComponent<productsFormPropsType> = ({props}) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === posibleStatus.IDLE) {
            dispatch(getAllProducts())
        }
    }, [dispatch])

    const error = useSelector(selectProductsFetchError())
    const status = useSelector(selectProductsStatus())
    const getProducts = useSelector(selectProductsState())

    return (
        <div>
            <ProductForm/>
            <table className="justTable">
                <thead>
                    <tr className="justTableHead">
                        <td>Name</td>
                        <td>Description</td>
                        <td>Units Available</td>
                        <td>Price</td>
                        <td>Min Amount Units Available</td>
                        <td>Max Amount Units Available</td>  
                        <td>Provider's Name</td>  
                        <td>Delete</td>  
                    </tr>
                </thead>

                {!error && getProducts.map((product) => <Product key={product.id} props={product} />)}
                

            </table>
        </div>
    )
};

export default ProductList;
