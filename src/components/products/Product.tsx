import * as React from 'react';
import { productType } from '../../state/slice/productSlice'

interface IProductProps {
}

type productPropsType={
    props: productType
}

const Product: React.FunctionComponent<productPropsType> = ({props}) => {
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
    </tr>
</tbody>
  )
};

export default Product;
