import React, { useState } from 'react';

const Sms = () => {

    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return(
        <form>
            <h4 className='mb-5'>SMS Based QRCode</h4>
            <div className='form-group'>
                <label className='mb-3'>Phone Number</label>
                <input className='form-control' type='number' onChange={e => setPhone(e.target.value)} value={phone} />
            </div>
            <div className='form-group mt-3'>
                <label className='mb-3'>Message</label>
                <textarea rows='4' className='form-control' onChange={e => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div className='form-group mt-3'>
                <button className='btn generate-btn'>Generate QRCode</button>
            </div>
        </form>
    );
}

export default Sms;