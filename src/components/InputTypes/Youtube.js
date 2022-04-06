import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQR } from '../../actions';

const Youtube = () => {
    
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(setQR('youtube://' + text));
    }

    return(
        <form onSubmit={submitForm}>
            <h4 className='mb-5'>Youtube Based QRCode</h4>
            <div className='form-group'>
                <label className='mb-3'>Enter Video ID Here</label>
                <input className='form-control' type='text' onChange={e => setText(e.target.value)} value={text} />
            </div>
            <div className='form-group mt-3'>
                <button className='btn generate-btn'>Generate QRCode</button>
            </div>
        </form>
    );
}

export default Youtube;