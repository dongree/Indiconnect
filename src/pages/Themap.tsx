import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Themap() {
    const thema = [
        { index: 1, text: '블루스' },
        { index: 2, text: '포크' },
        { index: 3, text: '펑크' },
        { index: 4, text: '하드록' },
        { index: 5, text: '메탈' },
        { index: 6, text: '팝' },
        { index: 7, text: '재즈' },
        { index: 8, text: 'J-ROCK' },
        { index: 9, text: '얼터너티브 록' },
        { index: 10, text: '라이브 클럽' },
        { index: 11, text: '소규모 공연장' },
        { index: 12, text: '소극장' },
        { index: 13, text: '카페' },
        { index: 14, text: '펍' },
        { index: 15, text: '페스티벌' },
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

    return <div style={{ textAlign: "center", marginTop: '40px', height: '800px' }}>
        <h1 style={{ fontSize: '22px' }}>선호하는 공연 테마를 선택하세요</h1>
        <div className="pick" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {thema.map((thema, index) => (
                <div key={index}>
                    <button style={{ width: '98px', height: '98px', position: 'relative', cursor: 'pointer', borderRadius: '48px', marginLeft: '10px', marginRight: '10px', marginTop: '20px', background: 'white', border: checkedIndexes.includes(index) ? '2px solid #1e1e1e' : '2px solid #E1E3E7', color: checkedIndexes.includes(index) ? '#1e1e1e' : '#8F9299', fontWeight: '500' }} onClick={() => toggleCheck(index)}>
                        {thema.text}
                    </button>
                </div>
            ))}
        </div>
        <div style={{ width: '100%', height: '86px', bottom: '0', position: 'fixed', display: 'flex', backgroundColor: 'white', borderTop: '1px solid #8F9299', justifyContent: 'center' }}>
            <Link to='/pickmusi'>
                <button style={{ width: '171px', height: '41px', borderRadius: '3px', marginRight: '10px', backgroundColor: 'white', color: 'black', border: '1px solid black', marginTop: '20px' }}>이전</button>
            </Link>
            <Link to='/keyword'>
                <button style={{ width: '171px', height: '41px', borderRadius: '3px', marginLeft: '10px', color: checkedIndexes.length >= 1 ? 'white' : '#8F9299', border: 'none', backgroundColor: checkedIndexes.length >= 1 ? "black" : "#CCCFD4", marginTop: '20px' }} disabled={checkedIndexes.length === 0}>다음</button>
            </Link>
        </div>
    </div>
}