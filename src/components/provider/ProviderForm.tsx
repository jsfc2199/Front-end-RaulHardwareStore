import React, { useState } from 'react';
import { useAppDispatch } from '../../store'
import { providerType } from "../../state/slice/providerSlice";
import { nanoid } from '@reduxjs/toolkit';
import { createProvider } from '../../actions/provider/addProvider';

interface IProviderFormProps {
}

const ProviderForm: React.FunctionComponent<IProviderFormProps> = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [passport, setPassport] = useState('')

    const dispatch = useAppDispatch()
    
    const onAdd = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        if(name && number && passport){
            const newProvider: providerType = {id: nanoid(), name, number, passport}
            dispatch(createProvider(newProvider))
            setName('')
            setNumber('')
            setPassport('')
        }
    }

    return (
        <div>
            <form className='add-form' id="form" onSubmit={(e) => onAdd(e)}>

                <div className='form-control'>
                    <label>Provider Name</label>
                    <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Provider Name' value={name} />
                </div>

                <div className='form-control'>
                    <label>Phone Number</label>
                    <input onChange={(e) => setNumber(e.target.value)} type='text' placeholder='Phone number' value={number} />
                </div>

                <div className='form-control'>
                    <label>Passport Number</label>
                    <input onChange={(e) => setPassport(e.target.value)} type='text' placeholder='Passport number' value={passport} />
                </div>

                <input type='submit' value='Save Provider' className='btn-save' />

            </form>
        </div>
    )
};

export default ProviderForm;
