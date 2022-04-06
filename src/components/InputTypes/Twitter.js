import React, { useState } from 'react';

const Twitter = () => {
    
    const [text, setText] = useState('');

    return(
        <form>
            <h4 className='mb-5'>Twitter Based QRCode</h4>
            <div className='form-group'>
                <label className='mb-3'>Enter Username Here</label>
                <input className='form-control' type='text' onChange={e => setText(e.target.value)} value={text} />
            </div>
            <div className='form-group mt-3'>
                <button className='btn generate-btn'>Generate QRCode</button>
            </div>
        </form>
    );
}

export default Twitter;