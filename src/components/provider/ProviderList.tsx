import React, { useEffect } from 'react';
import ProviderForm from './ProviderForm';
import Provider from './Provider'
import { useSelector } from 'react-redux';
import { selectProvidersFetchError, selectProvidersState, selectProvidersStatus, posibleStatus } from '../../state/slice/providerSlice'
import { getAllProviders } from '../../actions/provider/getAllProviders'
import { useAppDispatch } from '../../store'

interface IProviderListProps {
}

const ProviderList: React.FunctionComponent<IProviderListProps> = () => {    

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === posibleStatus.IDLE) {
            dispatch(getAllProviders())
        }
    }, [dispatch])

    const error = useSelector(selectProvidersFetchError())
    const status = useSelector(selectProvidersStatus())
    const getProviders = useSelector(selectProvidersState())

    return (
        <div>
            <ProviderForm />
            <table className="justTable">
                <thead>
                    <tr className="justTableHead">
                        <td>Name</td>
                        <td>Phone Number</td>
                        <td>Passport Identification</td>
                        <td>Edit</td>
                    </tr>
                </thead>

                {!error && getProviders.map((provider) => <Provider key={provider.id} props={provider} />)}
            </table>

        </div>
    )
};

export default ProviderList;

