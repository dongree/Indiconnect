import React from 'react'
import imagess from '../images/hada.png';
import Applist from '../components/Applist';
import { Link } from 'react-router-dom';

export default function ACTlist() {
    return (
        <div>
            <Applist />
            <div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <div className='imgimg' style={{ marginLeft: '20px' }}>
                        <img src={imagess} alt='space' />
                    </div>
                    <div className='space-title' style={{ marginLeft: '10px' }}>
                        <Link to='/info' style={{textDecoration:'none'}}>
                            <div style={{ display: 'flex', width: '230px' }}>
                                <h3 style={{ fontSize: '18px', height: '21px', marginTop: '5px', color:'black' }}>하다</h3>

                                <button style={{ width: '60px', height: '26px', marginLeft: 'auto', fontSize: '10px', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '3px', cursor: 'pointer' }}>신청 정보</button>

                            </div>
                        </Link>
                        <h4 style={{ fontSize: '12px', height: '21px', marginTop: '-10px', display: 'flex', fontWeight: '400' }}>5명<hr style={{ width: '1px', height: '10px', marginLeft: '5px', marginRight: '5px', marginTop: '3px' }} />010-0000-0000</h4>
                        <h4 style={{ fontSize: '12px', height: '14px', marginTop: '-15px', fontWeight: '400', width: '200px' }}>장르에 구애 없이 이 시대를 살아가는 우리들을 이야기하는 밴드</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
