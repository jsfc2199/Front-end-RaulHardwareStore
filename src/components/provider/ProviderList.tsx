import * as React from 'react';
import ProviderForm from './ProviderForm';
import Provider from './Provider'
import { useSelector } from 'react-redux';
import { RootState } from '../../store'
import {providerType} from '../../state/slice/providerSlice'


interface IProviderListProps {
}

const ProviderList: React.FunctionComponent<IProviderListProps> = (props) => {

    const providers = useSelector((state:RootState) => state.providers.providers)

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

                {providers.map((provider: providerType)=><Provider key={provider.id} props={provider}/>)}
            </table>

        </div>
    )
};

export default ProviderList;
