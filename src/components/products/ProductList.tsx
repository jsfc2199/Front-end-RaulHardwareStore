import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store'
import { posibleStatus } from '../../state/slice/providerSlice'
import { useSelector } from 'react-redux';
import { selectProductsFetchError, selectProductsStatus, selectProductsState } from '../../state/slice/productSlice'
import { getAllProducts } from '../../actions/products/getAllProducts'
import Product from './Product';


interface IProductListProps {
}

const ProductList: React.FunctionComponent<IProductListProps> = (props) => {

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
                    </tr>
                </thead>

                {!error && getProducts.map((product) => <Product key={product.id} props={product} />)}
                

            </table>
        </div>
    )
};

export default ProductList;
