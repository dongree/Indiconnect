import React from "react";
import image from '../images/search 1.png'



export default function SearchBar() {
    return <div>
        <div>
            <input className="sseerrch" style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', fontSize: '12px', width: '254px', height: '14px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '0px' }} placeholder="원하는 아티스트를 찾아보세요." type="text"></input>
        </div>
        <img style={{ position: 'absolute', top: '0', marginTop: '118px', marginLeft: '100px' }} src={image} alt="alt" />

    </div>
}