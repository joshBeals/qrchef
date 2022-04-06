import React from 'react';
import QrEditor from './QrEditor';
import QrGenerator from './QrGenerator';

const QrSection = () => {
    return(
        <div className='container mt-5 pb-5'>
            <div className='row g-0 justify-contnet-center'>
                <div className='col-md-8 col-sm-12 editor'>
                    <QrEditor />
                </div>
                <div className='col-md-4 col-sm-12 generator'>
                    <QrGenerator />
                </div>
            </div>
        </div>
    );
}

export default QrSection;