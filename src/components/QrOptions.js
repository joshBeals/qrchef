import React from 'react';
import { categories } from '../helpers/categories';

const QrOptions = () => {

    const renderOptions = categories.map(({ title, icon }) => {
        return(
            <div className='option-item' data-toggle="tooltip" data-placement="bottom" title={`Generates QR Code that contains ${title.toUpperCase()}`}>
                <div className='option'>
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