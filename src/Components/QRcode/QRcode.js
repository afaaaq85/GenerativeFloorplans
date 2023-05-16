import React from 'react'
import QRCode from 'qrcode.react';
import './QRcode.css'
import windows from '../../assets/img/windows.png'
import android from '../../assets/img/android.png'

const QRcode = () => {
    const apkLink = 'https://drive.google.com/file/d/1GTn5m5zhs7FpUkCKNfqqgrVvX8OGDh4S/view?usp=share_link';
    const winLink = 'https://drive.google.com/file/d/13j_NXOHUk-2DQNSvt2yax-X8uBow2WR9/view?usp=share_link';

    const handleDownloadWin = () => {
        window.open(winLink, '_blank');
      }
    const handleDownloadMob = () => {
        window.open(apkLink, '_blank');
      }

    return (
        <section id="qr">
            <div className='qr-container'>
                <h1 className='qr-title'> Get the app now! </h1>
                <div className='qr-codes'>
                    <div>
                        <h2>Windows 8.1/10 <span><img className='logo-app' src={windows} alt='img'/></span></h2>
                        <button className='download-windows' onClick={handleDownloadWin}>Download</button>
                    </div>
                    <div>
                        <QRCode className='Qrcode' value={apkLink} />
                        <h2>Android<span><img className='logo-app' src={android} alt='img'/></span></h2>
                        <button className='download-android' onClick={handleDownloadMob}>Download</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QRcode
