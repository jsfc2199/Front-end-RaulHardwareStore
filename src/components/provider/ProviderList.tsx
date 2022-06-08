import React, { useEffect } from 'react';
import ProviderForm from './ProviderForm';
import Provider from './Provider'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store'
import {providerType, selectProvidersFetchError, selectProvidersState, selectProvidersStatus, posibleStatus, getAllProviders} from '../../state/slice/providerSlice'
import { useAppDispatch} from '../../store'

interface IProviderListProps {
}

const ProviderList: React.FunctionComponent<IProviderListProps> = (props) => {

    const providers = useSelector((state:RootState) => state.providers.providers)

    const error = useSelector(selectProvidersFetchError())
    const status = useSelector(selectProvidersStatus())
    const getProviders = useSelector(selectProvidersState())

    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(status===posibleStatus.IDLE){
            dispatch(getAllProviders())
        }
    }, [dispatch])

    return (
        <div>
            <ProviderForm />

            <table className="justTable">
                <thead>
                    <tr className="justTableHead">
                        <td>Name</td>
                        <td>Phone Number</td>
                        <td>Passport Identification</td>
                    </tr>
                </thead>
                
                {getProviders.map((provider)=><Provider key={provider.id} props={provider}/>)}
            </table>

        </div>
    )
};

export default ProviderList;
