import React, { useState, useEffect } from 'react';
import image from '../images/x-32.png';
import { Link } from 'react-router-dom';

export default function AptCol() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div onClick={openModal}>
            {isOpen && (
                <div className='dhdh' />
            )}
            <button onClick={openModal} style={{ width: '160px', height: '41px', marginLeft: '15px', marginTop: '10px', backgroundColor: '#080A1A', color: 'white', border: '0.5px solid #080A1A', borderRadius: '3px' }}>승인</button>
            {isOpen && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <img style={{ cursor: 'pointer', marginLeft: '85%', marginTop: '10px' }} onClick={openModal} src={image} alt='exit' />
                        <h4 style={{ textAlign: 'center', fontSize: '18px', fontWeight: '500', lineHeight: '32px' }}>UNPLUGGED 'OPENSTAGE'<br />공연 팀으로 모집하시겠습니까?</h4>
                        <Link to='/applist2'>
                            <button style={{ width: '270px', height: '42px', marginLeft: '15px', marginTop: '10px', backgroundColor: '#080A1A', color: 'white', border: '0.5px solid #080A1A', borderRadius: '3px' }}>모집 승인하기</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
