import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store'
import { useSelector } from 'react-redux';
import { selectReceiptsFetchError, selectReceiptsStatus, selectReceiptsState } from '../../state/slice/receiptSlice'
import { posibleStatus } from '../../state/slice/providerSlice'
import { getAllReceipts } from '../../actions/receipt/getAllReceipts'
import { RootState } from '../../store'
import { useNavigate } from "react-router-dom";
import Receipt from './Receipt'


interface IReceiptListProps {
}

const ReceiptList: React.FunctionComponent<IReceiptListProps> = (props) => {
    const dispatch = useAppDispatch();

    const error = useSelector(selectReceiptsFetchError())
    const status = useSelector(selectReceiptsStatus())
    const getReceipts = useSelector(selectReceiptsState())

    useEffect(() => {
        if (status === posibleStatus.IDLE) {
            dispatch(getAllReceipts())
        }
    }, [dispatch])


    const { user } = useSelector((state: RootState) => state.logged)
    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) {
            navigate("/logInGoogle")
        }
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Receipts History</h1>
            <table className="justTable">
                <thead>
                    <tr className="justTableHead">
                        <td>Product Id</td>
                        <td>Units</td>
                        <td>Description</td>
                        <td>Date</td>
                        <td>Provider</td>
                    </tr>
                </thead>

                {!error && getReceipts.map((receipt) => <Receipt key={receipt.id} props={receipt} />)}

            </table>
        </div>
    )
};

export default ReceiptList;
