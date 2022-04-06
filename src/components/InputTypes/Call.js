import React, { useState } from 'react';

const Call = () => {

    const [phone, setPhone] = useState('');

    return(
        <form>
            <h4 className='mb-5'>Call Based QRCode</h4>
            <div className='form-group'>
                <label className='mb-3'>Enter Phone Number Here</label>
                <input className='form-control' type='number' onChange={e => setPhone(e.target.value)} value={phone} />
            </div>
            <div className='form-group mt-3'>
                <button className='btn generate-btn'>Generate QRCode</button>
            </div>
        </form>
    );
}

export default Call;