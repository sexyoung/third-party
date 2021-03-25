import './style.css';

import pig from './images/pig.png';

export const Page5 = () => {
  return (
    <div>
      <h1 className="center">需要另外花費嗎？</h1>
      <div className="grey center">
        <div className="img page5-img" style={{backgroundImage: `url(${pig})`}} />
        <strong>
        <h1 className="gold">不用</h1>
        要求使用社區修繕基金<br />
        住戶 <span className="blue">不需</span> 再額外支出
        </strong>
      </div>
    </div>
  )
}
