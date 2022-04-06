import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import QRCode from 'react-qr-code';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QrGenerator = () => {
    
    const qr = useSelector(state => state.qr);

    useEffect(() => {
        if(qr !== ''){
            toast.success(`QrCode Updated! 🥳🥳`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [qr]);

    return(
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
            <div className='qr-main'>
                <QRCode bgColor='white' fgColor='black' size={200} title='QR Chef' value={qr} />
            </div>
        </div>
    );
}

export default QrGenerator;