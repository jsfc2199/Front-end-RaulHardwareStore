import * as React from 'react';
import { productType } from '../../state/slice/productSlice'
import { useAppDispatch } from '../../store'
import { deleteProduct } from '../../actions/products/deleteProduct'
import { Link, useNavigate } from "react-router-dom";

interface IProductProps {
}

type productPropsType = {
    props: productType
}

const Product: React.FunctionComponent<productPropsType> = ({ props }) => {

    const dispatch = useAppDispatch()
    const onDelete = (props: productType) => {
        dispatch(deleteProduct(props))
    }

    return (
        <tbody>
            <tr>
                <td>{props.productName}</td>
                <td>{props.description}</td>
                <td>{props.unitsAvailable}</td>
                <td>{props.price}</td>
                <td>{props.minUnits}</td>
                <td>{props.maxUnits}</td>
                <td>{props.provider.name}</td>
                <td><button className="btn btn-delete" onClick={() => onDelete(props)}>
                    <span className="mdi mdi-delete mdi-24px"></span>
                    <span className="mdi mdi-delete-empty mdi-24px"></span>
                    <span>Delete</span>
                </button></td>
                <td><button className="btn btn-delete">
                    <Link to='/updateProduct' state={{ stateEdit: props.id }}>
                        Edit
                    </Link>
                </button></td>
            </tr>
        </tbody>
    )
};

export default Product;
