import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Keyword() {
    const thema = [
        { index: 1, text: '홍대' },
        { index: 2, text: '합정' },
        { index: 3, text: '상수' },
        { index: 4, text: '이태원' },
        { index: 5, text: '혜화' },
        { index: 6, text: '경기' },
        { index: 7, text: '인천' },
        { index: 8, text: '충청' },
        { index: 9, text: '대전' },
        { index: 10, text: '전라' },
        { index: 11, text: '대구' },
        { index: 12, text: '울산' },
        { index: 13, text: '광주' },
        { index: 14, text: '부산' },
        { index: 15, text: '제주' },
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

    return <div style={{ textAlign: "center", height: '800px' }}>
        <h1 style={{ fontSize: '22px', marginTop: '40px' }}>지역 키워드를 선택하세요</h1>
        <h4 style={{ fontSize: '14px', fontWeight: '300', color: '#8F9299' }}>원하는 지역에서 진행되는 맞춤 공연 정보를 확인할 수 있어요</h4>
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
            <Link to='/tema'>
                <button style={{ width: '171px', height: '41px', borderRadius: '3px', marginRight: '10px', backgroundColor: 'white', color: 'black', border: '1px solid black', marginTop: '20px' }}>이전</button>
            </Link>
            <button style={{ width: '171px', height: '41px', borderRadius: '3px', marginLeft: '10px', color: checkedIndexes.length >= 1 ? 'white' : '#8F9299', border: 'none', backgroundColor: checkedIndexes.length >= 1 ? "black" : "#CCCFD4", marginTop: '20px' }} disabled={checkedIndexes.length === 0}>다음</button>
        </div>
    </div>
}