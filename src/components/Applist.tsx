import React from 'react';
import images from '../images/arrow-up-right.png';
import image from '../images/arrow-left 1.png';
import imagess from '../images/IMG_2720 1.png';
import { Link } from 'react-router-dom';

export default function Applist() {
    return (
        <div>
            <div className='header' style={{ display: 'flex' }}>
                <Link to='/home2'>
                    <img style={{ width: '32px', height: '31.48px', marginLeft: '16px', marginTop: '13px', cursor: 'pointer' }} src={image} alt='back' />
                </Link>
                <h3 style={{ marginRight: '41%', marginLeft: 'auto' }}>신청 목록</h3>
            </div>
            <div style={{ borderTop: '1px solid #CCCFD4' }}></div>
            <div style={{ padding: '20px' }}>
                <button style={{ width: '60px', height: '20px', marginTop: '5px', cursor: 'pointer', backgroundColor: 'white', border: '0.5px solid #080A1A', borderRadius: '3px', fontSize: '10px' }}>기획 공연</button>
                <div className='space-title' style={{ display: 'flex' }}>
                    <h3 style={{ fontSize: '18px', height: '21px', marginTop: '10px' }}>UNPLUGGED 'OPENSTAGE'</h3>
                    <img style={{ width: '32px', height: '32px', marginLeft: 'auto', marginTop: '3px' }} src={images} alt='allow' />
                </div>
                <h4 style={{ fontSize: '12px', height: '14px', marginTop: '-10px' }}>공연일시 <a style={{ fontWeight: '400' }}>2023년 06월 22일 20시 - 21시</a></h4>
                <h4 style={{ fontSize: '12px', height: '21px', marginTop: '-10px', fontWeight: '400', display: 'flex' }}>06월 22일까지 모집<hr style={{ width: '0.01px', height: '10px', marginLeft: '5px', marginTop: '1px' }} /><a style={{ marginRight: '40%' }}>2/3 팀 모집 완료</a></h4>
            </div>
            <div className='buttons' style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ width: '165px', height: '42px', borderRadius: '3px', backgroundColor: 'white', boxShadow: '0px 0px 4px rgba(42, 45, 55, 0.1', border: 'none', fontWeight: '600' }}>요청 온 뮤지션 1</button>
                <Link to='/applist1'>
                <button style={{ width: '165px', height: '42px', borderRadius: '3px', backgroundColor: '#e1e3e7', boxShadow: '0px 0px 4px rgba(42, 45, 55, 0.1', border: 'none', color: '#b0b2b8', fontWeight: '600' }}>모집된 뮤지션 2</button>
                </Link>
            </div>
            <div style={{ borderTop: '1px solid #CCCFD4', marginTop:'10px' }}></div>
        </div>
    )
}
