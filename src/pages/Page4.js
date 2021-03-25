import './style.css';

import money from './images/money.png';

export const Page4 = () => {
  return (
    <div>
      <h1 className="center">第三方費用多少？</h1>
      <div className="grey center">
        <div className="img page4-img" style={{backgroundImage: `url(${money})`}} />
        <strong>
        希望管委會控制預算在一百萬左右<br />
        假設以百萬計算<br />
        換算 <span className="gold">347</span> 戶<br />
        平均每戶成本約 <span className="gold">2882</span> 元。
        </strong>
      </div>
    </div>
  )
}
