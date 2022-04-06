import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'react-qr-code';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { changeBG, changeFG } from '../actions';

const QrGenerator = () => {

    const dispatch = useDispatch();
    const fgColor = useSelector(state => state.fgColor);
    const bgColor = useSelector(state => state.bgColor);
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
                <QRCode bgColor={bgColor} fgColor={fgColor} size={200} title='QR Chef' value={qr} />
                <div className='mt-5 colorPicker'>
                    <div className='form-group'>
                        <label className="form-label">FgColor</label>
                        <input type="color" className="form-control form-control-color" onChange={e => dispatch(changeFG(e.target.value))} value={fgColor} title="Choose your color" />
                    </div>
                    <div className='form-group'>
                        <label className="form-label">BgColor</label>
                        <input type="color" className="form-control form-control-color" onChange={e => dispatch(changeBG(e.target.value))} value={bgColor} title="Choose your color" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QrGenerator;