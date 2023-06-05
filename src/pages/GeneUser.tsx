import React from "react";
import './back.css';
import Jumpage from "../components/Jumpage";
import Musici from "../components/Musici";
import Themee from "../components/Themee";
import Witch from "../components/Witch";
import '../components/bbutton.css';
import { Link } from "react-router-dom";

export default function GeneUser() {
    return (
        <div className="background">
            <div style={{ padding: '5px 20px' }}>
                <Jumpage />
                <p style={{ color: 'white', fontSize: '30px', fontWeight: '300' }}>나만의 <a style={{ fontWeight: '900' }}>공연 취향</a>을<br />설정하시겠어요?</p>
                <p style={{ color: 'white', fontSize: '14px', marginTop: '-20px' }}>선호하는 테마, 아티스트, 지역에 맞추어<br />취향에 맞는 공연을 추천해드립니다.</p>
            </div>
            <div style={{ display: 'flex', paddingTop: '40px' }}>
                <Musici />
                <Themee />
                <Witch />
            </div>
            <Link to='/pickmusi'>
                <div className="bottom">취향 설정 시작하기</div>
            </Link>
        </div>
    )
}