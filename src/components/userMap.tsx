import React, { useState } from 'react';
import { useEffect } from 'react';
import CheckBox from './CheckBox';
import styles from './userMap.module.css';
import mappin from '../asset/images/map-pin.png';
import infomodal_2 from '../asset/images/infomodal_2.png';
import infomodal_3 from '../asset/images/infomodal_3.png';
import chatbot from '../asset/images/chat-bot.png';
import ChatBot from './ChatBot';
interface Props {
  className?: string;
  white?: boolean;
}

declare global {
  interface Window {
    kakao: any;
  }
}
const UserMap: React.FC<Props> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  // const ChangeStatus = () => {
  //   setVisible(!visible)
  // }
  const ModalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };
  const [markerclicked, setMarkerClicked] = useState(false);
  useEffect(() => {
    var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    const container = document.getElementById('myMap');
    var map = new window.kakao.maps.Map(container, {
      center: new window.kakao.maps.LatLng(37.55743, 126.92696), // 중심 좌표
      level: 5,
    });
    var selectedMarker: any = null;
    var imageSize = new window.kakao.maps.Size(18, 24.5); // 마커이미지의 크기입니다
    var imageOption = {}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    var markerImage = new window.kakao.maps.MarkerImage(
      mappin,
      imageSize,
      imageOption
    );

    function displayMarker(x: number, y: number) {
      let marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(x, y),
        image: markerImage,
      });
      marker.setMap(map);

      window.kakao.maps.event.addListener(marker, 'click', function () {
        if (!selectedMarker || marker != selectedMarker) {
          !!selectedMarker && selectedMarker.setImage(markerImage);

          marker.setImage(
            new window.kakao.maps.MarkerImage(
              mappin,
              new window.kakao.maps.Size(24.55, 31.41),
              imageOption
            )
          );
          //infowindow.setContent('<div style="padding:5px;font-size:12px;">' + '</div>')
          //infowindow.open(map, marker)
          ModalOpenHandler();
        }
        selectedMarker = marker;
      });
    }
    displayMarker(37.55543, 126.92296);
    displayMarker(37.55943, 126.92896);
  }, []);

  return (
    <div style={{ position: 'relative', height: '80%' }}>
      <div id="myMap" className={styles.map}></div>
      <div className={styles.checkbox_container}>
        <CheckBox text="기획 공연" />
        <CheckBox text="대관 공연" />
      </div>
      <img
        className={modalOpen ? styles.chatbot_up : styles.chatbot_down}
        src={chatbot}
        // onClick={() => onChange(!visible)}
      />
      <div
        className={modalOpen ? styles.modal_open : styles.modal_close}
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <text style={{ marginTop: 21, marginBottom: 24, fontSize: 20 }}>
          지훈님, 주변에 {`2개`}의 공연이 있어요
        </text>
        <img src={infomodal_2} style={{ marginBottom: 20 }} />
        <img src={infomodal_3} style={{ marginBottom: 11 }} />
      </div>

      {/* {visible ? <ChatBot/> : null} */}
    </div>
  );
};

export default UserMap;
