import React from 'react'
import imagess from '../images/umul.png';
import imagesss from '../images/OAH.png';
import images from '../images/arrow-up-right.png';
import image from '../images/arrow-left 1.png';
import imagessss from '../images/hada.png';
import Applist from '../components/Applist';
import { Link } from 'react-router-dom';

export default function RCUlist1() {
    return (
        <div>
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
                    <Link to='/applist'>
                        <button style={{ width: '165px', height: '42px', borderRadius: '3px', backgroundColor: '#e1e3e7', boxShadow: '0px 0px 4px rgba(42, 45, 55, 0.1', border: 'none', fontWeight: '600', color: '#b0b2b8' }}>요청 온 뮤지션 0</button>
                    </Link>
                    <button style={{ width: '165px', height: '42px', borderRadius: '3px', backgroundColor: 'white', boxShadow: '0px 0px 4px rgba(42, 45, 55, 0.1', border: 'none', fontWeight: '600' }}>모집된 뮤지션 3</button>
                </div>
                <div style={{ borderTop: '1px solid #CCCFD4', marginTop: '10px' }}></div>
            </div>
            <div>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent:'center' }}>
                    <div className='imgimg'>
                        <img src={imagessss} alt='space' />
                    </div>
                    <div className='space-title' style={{ marginLeft: '10px' }}>
                        <Link to='/info' style={{textDecoration:'none'}}>
                            <div style={{ display: 'flex', width: '230px' }}>
                                <h3 style={{ fontSize: '18px', height: '21px', marginTop: '5px', color:'black' }}>하다</h3>
                                <a style={{color:'#E53A40', fontSize:'12px', fontWeight:'700', marginLeft:'5px', marginTop:'8px'}}>N</a>
                                <button style={{ width: '60px', height: '26px', marginLeft: 'auto', fontSize: '10px', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '3px', cursor: 'pointer' }}>신청 정보</button>
                            </div>
                        </Link>
                        <h4 style={{ fontSize: '12px', height: '21px', marginTop: '-10px', display: 'flex', fontWeight: '400' }}>5명<hr style={{ width: '1px', height: '10px', marginLeft: '5px', marginRight: '5px', marginTop: '3px' }} />010-0000-0000</h4>
                        <h4 style={{ fontSize: '12px', height: '14px', marginTop: '-15px', fontWeight: '400', width: '200px' }}>장르에 구애 없이 이 시대를 살아가는 우리들을 이야기하는 밴드</h4>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #CCCFD4', marginTop: '10px' }}></div>
            <div>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent:'center' }}>
                    <div className='imgimg'>
                        <img src={imagess} alt='space' />
                    </div>
                    <div className='space-title' style={{ marginLeft: '10px' }}>
                        <div style={{ display: 'flex', width: '230px' }}>
                            <h3 style={{ fontSize: '18px', height: '21px', marginTop: '5px' }}>우물</h3>
                            <button style={{ width: '60px', height: '26px', marginLeft: 'auto', fontSize: '10px', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '3px', cursor: 'pointer' }}>신청 정보</button>
                        </div>
                        <h4 style={{ fontSize: '12px', height: '21px', marginTop: '-10px', display: 'flex', fontWeight: '400' }}>5명<hr style={{ width: '1px', height: '10px', marginLeft: '5px', marginRight: '5px', marginTop: '3px' }} />010-0000-0000</h4>
                        <h4 style={{ fontSize: '12px', height: '14px', marginTop: '-15px', fontWeight: '400', width: '200px' }}>깊은 우물 속 우리들의 이야기</h4>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #CCCFD4', marginTop: '10px' }}></div>
            <div>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent:'center' }}>
                    <div className='imgimg'>
                        <img src={imagesss} alt='space' />
                    </div>
                    <div className='space-title' style={{ marginLeft: '10px' }}>
                        <div style={{ display: 'flex', width: '230px' }}>
                            <h3 style={{ fontSize: '18px', height: '21px', marginTop: '5px' }}>OAH!</h3>
                            <button style={{ width: '60px', height: '26px', marginLeft: 'auto', fontSize: '10px', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '3px', cursor: 'pointer' }}>신청 정보</button>
                        </div>
                        <h4 style={{ fontSize: '12px', height: '21px', marginTop: '-10px', display: 'flex', fontWeight: '400' }}>5명<hr style={{ width: '1px', height: '10px', marginLeft: '5px', marginRight: '5px', marginTop: '3px' }} />010-0000-0000</h4>
                        <h4 style={{ fontSize: '12px', height: '14px', marginTop: '-15px', fontWeight: '400', width: '200px' }}>개성있고 감각적인 음악을 추구하며 자유로운 음악을 하는 밴드 OAH!</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
