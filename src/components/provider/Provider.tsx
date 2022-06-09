import React, {useState} from 'react';
import {providerType} from '../../state/slice/providerSlice'


interface IProviderProps {
}

type providerPropsType = {
    props: providerType
}

const Provider: React.FunctionComponent<providerPropsType> = ({props}) => {

    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.number}</td>
                <td>{props.passport}</td>
                <td><button className="btn btn-delete">
                    <span className="mdi mdi-delete mdi-24px"></span>
                    <span className="mdi mdi-delete-empty mdi-24px"></span>
                    <span>Edit</span>
                </button></td>
            </tr>
        </tbody>
    )
};

export default Provider;
