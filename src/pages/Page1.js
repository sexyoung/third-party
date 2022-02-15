import './style.css';

import water from './images/water.png';
import machine from './images/machine.png';
import car from './images/car.png';
import door from './images/door.png';

export const Page1 = () => {
  return (
    <div>
      <h1 className="center">為何要第公正驗收？</h1>
      <div className="center grey">
        <strong>
          因住戶入住不斷發現<span className="red">公設問題</span>，如
        </strong>
        <div className="row">
          <div className="col-6 col-md-3 center">
            <div className="img page1-img" style={{backgroundImage: `url(${water})`}} />
            <strong>頂樓嚴重漏水</strong>
          </div>
          <div className="col-6 col-md-3 center">
            <div className="img page1-img" style={{backgroundImage: `url(${machine})`}} />
            <strong>車道感應不良</strong>
          </div>
          <div className="col-6 col-md-3 center">
            <div className="img page1-img" style={{backgroundImage: `url(${car})`}} />
            <strong>車道鋪面不佳</strong>
          </div>
          <div className="col-6 col-md-3 center">
            <div className="img page1-img" style={{backgroundImage: `url(${door})`}} />
            <strong>門禁系統異常</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
