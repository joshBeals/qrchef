import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQR } from '../../actions';

const Mail = () => {

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(setQR(`MATMSG:TO:${to};SUB:${subject};BODY:${message};;`));
    }

    return(
        <form onSubmit={submitForm}>
            <h4 className='mb-5'>E-Mail Based QRCode</h4>
            <div className='form-group'>
                <label className='mb-3'>To Email</label>
                <input className='form-control' type='email' onChange={e => setTo(e.target.value)} value={to} />
            </div>
            <div className='form-group mt-3'>
                <label className='mb-3'>Subject</label>
                <input className='form-control' type='text' onChange={e => setSubject(e.target.value)} value={subject} />
            </div>
            <div className='form-group mt-3'>
                <label className='mb-3'>Subject</label>
                <textarea rows='4' className='form-control' onChange={e => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div className='form-group mt-3'>
                <button className='btn generate-btn'>Generate QRCode</button>
            </div>
        </form>
    );
}

export default Mail;