import * as React from 'react';
import { billType } from '../../state/slice/billSlice';

interface IBillProps {
}

type billPropsType = {
    props: billType
}

const Bill: React.FunctionComponent<billPropsType> = ({ props }) => {
    return (
        <tbody>
            <tr>
                <td>{props.clientName}</td>
                <td>{props.seller}</td>
                <td>{props.date}</td>
                <td><table>{props.product.map(product =>{
                    return <td>{product.productName}</td>
                })}</table></td>
                <td>{props.totalPaid}</td>
            </tr>
        </tbody>
    )
};

export default Bill;
