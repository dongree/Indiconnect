import React from 'react';
import image from '../images/arrow-left 1.png';
import images from '../images/hada1.png';
import { Link } from 'react-router-dom';
import BottomSheet from '../components/BottomSheet';
import AptCol from '../components/AptCol';

export default function Actimp() {
    return (
        <div>
            <div className='header' style={{ display: 'flex' }}>
                <Link to='/applist'>
                    <img style={{ width: '32px', height: '31.48px', marginLeft: '16px', marginTop: '13px', cursor: 'pointer' }} src={image} alt='back' />
                </Link>
                <h3 style={{ marginRight: '41%', marginLeft: 'auto' }}>신청 정보</h3>
            </div>
            <div style={{ borderTop: '1px solid #CCCFD4' }}></div>
            <div>
                <img style={{ width: '100%' }} src={images} alt='gkek' />
                <div style={{ display: 'flex', padding: '15px 25px' }}>
                    <h3 style={{ fontSize: '22px', height: '21px', marginTop: '5px', color: 'black', fontWeight: '500' }}>하다</h3>
                    <button style={{ width: '77px', height: '26px', marginLeft: 'auto', fontSize: '11px', backgroundColor: 'white', border: '0.5px solid #080A1A', color: 'black', borderRadius: '3px', cursor: 'pointer' }}>희망 순서 <a style={{ fontWeight: '900' }}>1번</a></button>
                </div>
                <div className='number' style={{ display: 'flex', padding: '10px 25px' }}>
                    <div className='phone'>
                        <h4 style={{ color: '#8F9299', fontSize: '10px', fontWeight: '500', marginTop: '-10px' }}>대표자 연락처</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px', color: '#080A1A', marginTop: '-5px' }}>010-0000-0000</h4>
                    </div>
                    <hr style={{ height: '20px', marginTop: '6px', marginLeft: '48px' }} />
                    <div className='refund' style={{ marginLeft: 'auto', marginRight: '25px' }}>
                        <h4 style={{ color: '#8F9299', fontSize: '10px', fontWeight: '500', marginTop: '-10px' }}>환불 계좌번호</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px', color: '#080A1A', marginTop: '-5px' }}>신한은행 0000000000</h4>
                    </div>
                </div>
                <div className='soge' style={{padding:'5px 25px'}}>
                    <div className='musician'>
                        <h4 style={{ color: '#8F9299', fontSize: '10px', fontWeight: '500', marginTop: '-10px' }}>뮤지션 소개</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px', color: '#080A1A', marginTop: '-10px' }}>장르에 구매 없이 이 시대를 살아가는<br />우리들을 이야기하는 밴드</h4>
                    </div>
                    <div className='musician'>
                        <h4 style={{ color: '#8F9299', fontSize: '10px', fontWeight: '500' }}>멤버 구성</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px', color: '#080A1A', marginTop: '-10px' }}>보컬(1), 기타(2), 베이스(1), 드럼(1)</h4>
                    </div>
                    <div className='musician'>
                        <h4 style={{ color: '#8F9299', fontSize: '10px', fontWeight: '500'}}>공연 이력</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px', color: '#080A1A', marginTop: '-10px' }}>
                            · 2022년 5월 28일 MUNIV CONCERT ‘사각지대’<br />
                            · 2023년 2월 15일 BRICK DAY with BAND<br />
                            · 2023년 5월 19일 CLUB A.O.R CRAZY FRIDAY<br />
                            · 2023년 5월 27일 PETSOUNDS INDIE LIVE
                        </h4>
                    </div>
                    <div className='musician'>
                        <h4 style={{ color: '#8F9299', fontSize: '10px', fontWeight: '500' }}>대표 공연 영상</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px', color: '#080A1A', marginTop: '-10px' }}>https://youtu.be/ARz9MSY90Oo</h4>
                    </div>
                </div>
                <BottomSheet/>
                
            </div>
        </div>
    )
}
