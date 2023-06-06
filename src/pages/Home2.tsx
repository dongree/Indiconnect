import React, { useState } from 'react';
import images from '../images/arrow-up-right.png';
import imagess from '../images/IMG_2720 1.png';
import imagesss from '../images/IMG_2720 12.png';
import imagessss from '../images/IMG_2720 4.png';
import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';

export default function Home2() {
  const [isTrans, setIsTrans] = useState(false);

  const handleLinkClick = () => {
    setIsTrans(true);

    setTimeout(() => {
      setIsTrans(false);
    }, 2000);
  };
  return (
    <>
      <HomeHeader />
      <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
        <h3 style={{ padding: '2%' }}>나의 공연장</h3>
        <div className="space-hangang" style={{ display: 'flex' }}>
          <div className="imgimg" style={{ marginLeft: '10px' }}>
            <img src={imagess} alt="space" />
          </div>
          <div className="space-title" style={{ marginLeft: '20px' }}>
            <h3 style={{ fontSize: '18px', height: '21px', marginTop: '5px' }}>
              언플러그드 홍대점
            </h3>
            <h4
              style={{
                fontSize: '12px',
                height: '14px',
                marginTop: '-10px',
                fontWeight: '400',
              }}
            >
              공연장 | 30평
            </h4>
            <h4
              style={{
                fontSize: '11px',
                height: '21px',
                marginTop: '-10px',
                fontWeight: '400',
              }}
            >
              서울특별시 마포구 와우산로33길 26 1층
            </h4>
          </div>
          <div
            className="arrow-img"
            style={{
              marginLeft: 'auto',
              marginTop: '0px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            <img src={images} alt="gd" />
          </div>
        </div>
        <div
          style={{ borderTop: '1px solid #CCCFD4', marginTop: '10px' }}
        ></div>
        <div style={{ display: 'flex' }}>
          <h3 style={{ padding: '2%' }}>예정된 기획 공연</h3>
          <button
            style={{
              width: '60px',
              height: '26px',
              marginLeft: 'auto',
              marginRight: '20px',
              marginTop: '25px',
              cursor: 'pointer',
              backgroundColor: 'white',
              border: '0.5px solid #080A1A',
              borderRadius: '3px',
              fontSize: '10px',
            }}
          >
            공연 추가
          </button>
        </div>
        <Link
          to="/applist"
          style={{ textDecoration: 'none' }}
          onClick={handleLinkClick}
        >
          <div
            className="sincheng"
            style={{
              width: '235px',
              boxShadow: '0px 0px 4px rgba(42, 45, 55, 0.1)',
              margin: '2%',
            }}
          >
            <img src={imagessss} alt="rhddus" />
            <div style={{ textDecoration: 'none', color: 'black' }}>
              <h3
                style={{
                  fontSize: '14px',
                  margin: '10px',
                }}
              >
                UNPLUGGED 'OPENSTAG..
              </h3>
              <h4
                style={{
                  fontSize: '12px',
                  height: '14px',
                  marginLeft: '10px',
                }}
              >
                공연일시{' '}
                <a style={{ fontWeight: '400' }}>
                  2023년 06월 22일 20시 - 21시
                </a>
              </h4>
              <h4
                style={{
                  fontSize: '12px',
                  marginTop: '-10px',
                  fontWeight: '400',
                  display: 'flex',
                  marginLeft: '10px',
                }}
              >
                06월 22일까지 모집 | 2/3팀
              </h4>
            </div>
          </div>
        </Link>
        <div
          style={{ borderTop: '1px solid #CCCFD4', marginTop: '10px' }}
        ></div>
        <div className="dycjd">
          <h3 style={{ padding: '2%' }}>대관 예약 요청</h3>
          <div style={{ display: 'flex' }}>
            <div className="imgimg" style={{ marginLeft: '20px' }}>
              <img src={imagesss} alt="space" />
            </div>
            <div className="space-title" style={{ marginLeft: '20px' }}>
              <div style={{ display: 'flex', width: '230px' }}>
                <h3
                  style={{ fontSize: '18px', height: '21px', marginTop: '5px' }}
                >
                  청춘원샷
                </h3>
                <button
                  style={{
                    width: '60px',
                    height: '26px',
                    marginLeft: 'auto',
                    marginRight: '10px',
                    fontSize: '10px',
                    backgroundColor: 'black',
                    border: 'none',
                    color: 'white',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  신청 정보
                </button>
              </div>
              <h4
                style={{
                  fontSize: '12px',
                  height: '14px',
                  marginTop: '-10px',
                  fontWeight: '400',
                }}
              >
                언플러그드 홍대점
              </h4>
              <h4
                style={{
                  fontSize: '12px',
                  height: '21px',
                  marginTop: '-10px',
                  display: 'flex',
                  fontWeight: '400',
                }}
              >
                6명
                <hr
                  style={{
                    width: '1px',
                    height: '10px',
                    marginLeft: '5px',
                    marginRight: '5px',
                    marginTop: '3px',
                  }}
                />
                010-0000-0000
              </h4>
            </div>
          </div>
          <div
            style={{ borderTop: '1px solid #CCCFD4', marginTop: '10px' }}
          ></div>
        </div>
      </div>
    </>
  );
}
