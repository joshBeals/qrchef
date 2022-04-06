import illustration from '../assets/img/illustration.svg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Text from './InputTypes/Text';
import Url from './InputTypes/Url';
import Mail from './InputTypes/Mail';
import Call from './InputTypes/Call';
import Sms from './InputTypes/Sms';
import Youtube from './InputTypes/Youtube';
import Instagram from './InputTypes/Instagram';
import Twitter from './InputTypes/Twitter';

const QrInpput = () => {

    const category = useSelector(state => state.category);

    const renderContent = () => {
        switch(category){
            case 'text':
                return <Text />;
            case 'url':
                return <Url />;
            case 'e-mail':
                return <Mail />;
            case 'call':
                return <Call />;
            case 'sms':
                return <Sms />;
            case 'youtube':
                return <Youtube />;
            case 'instagram':
                return <Instagram />;
            case 'twitter':
                return <Twitter />;
            default:
                return(
                    <div className='default'>
                        {/* <img src={illustration} alt='illustration' /> */}
                        <h3>Select one of the options above to generate a QRCode in that category 😎😉✨</h3>
                    </div>
                );
        }
    }

    return(
        <div className='inputList'>
            {renderContent()}
        </div>
    );
}

export default QrInpput;