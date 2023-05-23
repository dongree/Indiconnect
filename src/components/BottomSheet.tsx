import React, { useState } from 'react';
import image from '../images/arrow-up-right.png';
import './BottomSheet.css'; // 스타일 파일
import AptCol from './AptCol';

const BottomSheet = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBottomSheet = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <nav className='wrapper' style={{ paddingLeft: '13px' }}>
                <div>
                    <button style={{ width: '160px', height: '41px', marginTop: '10px', border: '0.5px solid #080A1A', backgroundColor: 'white', borderRadius: '3px' }}>거절</button>
                </div>
                <div>
                    <button onClick={toggleBottomSheet} style={{ width: '160px', height: '41px', marginLeft: '17px', marginTop: '10px', backgroundColor: '#080A1A', color: 'white', border: '0.5px solid #080A1A', borderRadius: '3px' }}>승인</button>
                </div>
            </nav>
            {isOpen && (
                <div className="bottomSheet" style={{transform:'all 3s'}}>
                    <div style={{ display: 'flex',transform:'all 3s' }}>
                        <img style={{ width: '32px', height: '32px' }} src={image} alt='f' />
                        <h2>결제 정보</h2>
                        <button style={{ width: '42px', height: '20px', marginLeft: 'auto', fontSize: '10px', backgroundColor: 'white', border: '0.5px solid #080A1A', color: 'black', borderRadius: '3px', cursor: 'pointer', marginTop: '-2px', marginRight: '40px' }}>영수증</button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p style={{marginLeft:'35px', fontSize:'14px'}}>참가비</p>
                        <p style={{marginLeft:'auto', marginRight: '40px', fontSize:'14px'}}><a style={{fontWeight:'600'}}>100,000</a>원</p>
                    </div>
                    <div style={{ display: 'flex', marginTop:'-15px', marginBottom:'100px' }}>
                        <p style={{marginLeft:'35px', fontSize:'14px'}}>결제 수단</p>
                        <p style={{marginLeft:'auto', marginRight: '40px', fontSize:'14px'}}>카카오페이</p>
                    </div>
                    <div style={{border:'0.5px solid #8F9299', width:'92%'}}/>
                    <div style={{ display: 'flex'}}>
                        <div>
                            <button onClick={toggleBottomSheet} style={{ width: '160px', height: '41px', marginTop: '10px', border: '0.5px solid #080A1A', backgroundColor: 'white', borderRadius: '3px' }}>거절</button>
                        </div>
                        <div>
                            <AptCol/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BottomSheet;