import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store'
import { useSelector } from 'react-redux';
import { posibleStatus } from '../../state/slice/providerSlice'
import { selectBillsFetchError, selectBillsStatus, selectBillsState } from '../../state/slice/billSlice'
import { getAllBills } from '../../actions/bill/getAllBills'
import { RootState } from '../../store'
import { useNavigate } from "react-router-dom";
import Bill from './Bill';

interface IBillListProps {
}

const BillList: React.FunctionComponent<IBillListProps> = (props) => {
    const dispatch = useAppDispatch();

    const error = useSelector(selectBillsFetchError())
    const status = useSelector(selectBillsStatus())
    const getBills = useSelector(selectBillsState())

    useEffect(() => {
        if (status === posibleStatus.IDLE) {
            dispatch(getAllBills())
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
            <h1 style={{ textAlign: 'center' }}>Bills History</h1>
            <table className="justTable">
                <thead>
                    <tr className="justTableHead">
                        <td>Client Name</td>
                        <td>Seller Name</td>
                        <td>Date</td>
                        <td>Product Name</td>
                        <td>Total Amount</td>
                    </tr>
                </thead>

                {!error && getBills.map((receipt) => <Bill key={receipt.id} props={receipt} />)}

            </table>
        </div>
    )
};

export default BillList;
