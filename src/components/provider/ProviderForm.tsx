import React, { useState } from 'react';

interface IProviderFormProps {
}

const ProviderForm: React.FunctionComponent<IProviderFormProps> = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [passport, setPassport] = useState('')
    
    return (
        <div>
            <form className='add-form' id="form">

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

                <input type='submit' value='Save Portfolio' className='btn-save' />

            </form>
        </div>
    )
};

export default ProviderForm;
