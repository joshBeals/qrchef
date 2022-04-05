import React from 'react';
import { categories } from '../helpers/categories';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../actions';

const QrOptions = () => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    const renderOptions = categories.map(({ title, icon }) => {
        return(
            <div key={title} className='option-item' data-toggle="tooltip" data-placement="bottom" title={`Generates QR Code that contains ${title.toUpperCase()} data`}>
                <div className={`option ${category == title && 'active'}`} onClick={() => dispatch(changeCategory(title))}>
                    <i className={`bi bi-${icon}`}></i>
                    <p>{title.charAt(0).toUpperCase() + title.substr(1).toLowerCase()}</p>
                </div>
            </div>
        );
    });

    return(
        <div className='main-option'>
            {renderOptions}
        </div>
    );
}

export default QrOptions;