import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import image1 from '../images/misician 1.png'
import image2 from '../images/misician 2.png'
import image3 from '../images/misician 3.png'
import image4 from '../images/misician 4.png'
import image5 from '../images/misician 5.png'
import image6 from '../images/misician 6.png'
import image7 from '../images/misician 7.png'
import image8 from '../images/misician 8.png'
import image9 from '../images/misician 9.png'
import image10 from '../images/misician 10.png'
import image11 from '../images/misician 11.png'
import image12 from '../images/misician 12.png'
import '../components/bbutton.css'
import { Link } from "react-router-dom";


export default function Pickmusi() {
    // 이미지와 텍스트를 배열로 정의합니다.
    const musicians = [
        { image: image1, text: '하다' },
        { image: image2, text: 'OAH!' },
        { image: image3, text: '우물' },
        { image: image4, text: 'ANDOR' },
        { image: image5, text: '파파더캅' },
        { image: image6, text: '화노' },
        { image: image7, text: '프랭클리' },
        { image: image8, text: '김규도' },
        { image: image9, text: '투데이올드스니커즈' },
        { image: image10, text: '이우든' },
        { image: image11, text: '신경우' },
        { image: image12, text: '다양성' }
    ];

    const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);

    const toggleCheck = (index: number) => {
        let updatedIndexes = [...checkedIndexes];
        if (updatedIndexes.includes(index)) {
            updatedIndexes = updatedIndexes.filter((i) => i !== index);
        } else {
            updatedIndexes.push(index);
        }
        setCheckedIndexes(updatedIndexes);
    };

    return (
        <div style={{ textAlign: 'center', height: '900px', marginTop: '40px' }}>
            <h1 style={{ fontSize: '22px' }}>선호하는 인디 뮤지션을 선택하세요</h1>
            <h3 style={{ fontSize: '14px', fontWeight: '300', color: '#8F9299' }}>선택한 아티스트의 공연 일정을 확인할 수 있어요.</h3>
            <SearchBar />
            <div className="pick" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {musicians.map((musician, index) => (
                    <div key={index}>
                        <div style={{ position: 'relative', height: '160px', cursor: 'pointer' }} >
                            <img style={{ border: checkedIndexes.includes(index) ? '3px solid black' : 'none', borderRadius:'60px' }} onClick={() => toggleCheck(index)} src={musician.image} alt="" />
                            <span style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', fontSize: '14px', width: '110px', color: checkedIndexes.includes(index) ? '#080A1A' : '#8F9299', fontWeight: checkedIndexes.includes(index) ? '900' : '400' }}>{musician.text}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ width: '100%', height: '86px', bottom: '0', position: 'fixed', display: 'flex', backgroundColor: 'white', borderTop: '1px solid #8F9299', justifyContent: 'center' }}>
                <Link to='/geneuser'>
                    <button style={{ width: '171px', height: '41px', borderRadius: '3px', marginRight: '10px', backgroundColor: 'white', color: 'black', border: '1px solid black', marginTop: '20px' }}>이전</button>
                </Link>
                <Link to="/tema">
                    <button style={{ width: '171px', height: '41px', borderRadius: '3px', marginLeft: '10px', color: checkedIndexes.length >= 1 ? 'white' : '#8F9299', border: 'none', backgroundColor: checkedIndexes.length >= 1 ? "black" : "#CCCFD4", marginTop: '20px' }} disabled={checkedIndexes.length === 0}>다음</button>
                </Link>
            </div>
        </div>
    )
}