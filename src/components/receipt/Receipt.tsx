import * as React from 'react';
import { receiptType } from '../../state/slice/receiptSlice';

interface IReceiptProps {
}

type receiptPropsType = {
    props: receiptType
}

const Receipt: React.FunctionComponent<receiptPropsType> = ({ props }) => {


    return (
        <tbody>
            <tr>
                <td>{props.productId}</td>
                <td>{props.units}</td>
                <td>{props.description}</td>
                <td>{props.date}</td>
                <td>{props.provider.name}</td>
            </tr>
        </tbody>


    )
};

export default Receipt;
