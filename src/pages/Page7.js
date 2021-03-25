import { Link } from "react-router-dom";

import './style.css';
import family from './images/family.png';

export const Page7 = () => {
  return (
    <div>
      <div className="grey center">
        <div className="img page5-img" style={{backgroundImage: `url(${family})`}} />
        <br />
        <h3 className="center">
          好的社區需要大家凝聚共識<br />
          希望大家支持公設嚴謹驗收與點交
        </h3>
        <Link to="/signature" style={{ fontSize: 32, fontWeight: 'bold' }}>馬上加入連署!</Link>
      </div>
    </div>
  )
}
