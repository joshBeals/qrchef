import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQR } from '../../actions';

const Twitter = () => {
    
    const [text, setText] = useState('');
    const [type, setType] = useState('profile');
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(setQR('https://twitter.com/' + (type === 'profile' ? text : 'intent/tweet?text=' + text)));
    }

    return(
        <form onSubmit={submitForm}>
            <h4 className='mb-5'>Twitter Based QRCode</h4>
            <div className='form-group'>
                <label className='mb-3'>Select Category</label>
                <select className='form-select' onChange={e => setType(e.target.value)} value={type}>
                    <option value='profile'>Profile</option>
                    <option value='tweet'>Tweet</option>
                </select>
            </div>
            <div className='form-group mt-3'>
                <label className='mb-3'>{type == 'profile' ? 'Username' : 'Tweet'}</label>
                <input className='form-control' type='text' onChange={e => setText(e.target.value)} value={text} />
            </div>
            <div className='form-group mt-3'>
                <button className='btn generate-btn'>Generate QRCode</button>
            </div>
        </form>
    );
}

export default Twitter;