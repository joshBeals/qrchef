import illustration from '../assets/img/illustration.svg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const QrInpput = () => {

    const category = useSelector(state => state.category);

    const renderContent = () => {
        switch(category){
            case 'text':
                return(
                    <p>{category}</p>
                );
            case 'url':
                return(
                    <p>{category}</p>
                );
            case 'location':
                return(
                    <p>{category}</p>
                );
            case 'call':
                return(
                    <p>{category}</p>
                );
            case 'sms':
                return(
                    <p>{category}</p>
                );
            case 'youtube':
                return(
                    <p>{category}</p>
                );
            case 'instagram':
                return(
                    <p>{category}</p>
                );
            case 'twitter':
                return(
                    <p>{category}</p>
                );
            default:
                return(
                    <div className='default'>
                        <img src={illustration} alt='illustration' />
                        <h3>Select one of the options above to generate a QRCode in that category 😎😉✨</h3>
                    </div>
                )
        }
    }

    return(
        <div className='inputList'>
            {renderContent()}
        </div>
    );
}

export default QrInpput;