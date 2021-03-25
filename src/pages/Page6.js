import './style.css';
import glassman1 from './images/glassman1.png';
import glassman2 from './images/glassman2.png';

export const Page6 = () => {
  return (
    <div>
      <h1 className="center">據說已有中華建經驗收，為何還要找第三方？</h1>
      <div className="row grey">
        <div className="col-12 col-md-3">
          <div className="img page6-img" style={{backgroundImage: `url(${glassman1})`}} />
          <strong>
            不反對之前的驗收，但迄今無法確認報告和驗收內容
            若中華的驗收報告和檢驗項目都確實落實且符合規範
            住戶也可表決接受中華報告不另重做
          </strong>
        </div>
        <div className="col-12 col-md-3">
          <div className="img page6-img" style={{backgroundImage: `url(${glassman2})`}} />
          <strong>
            但中華乃起造單位所找，為 <span className="blue">避免球員兼裁判</span>
            由另一個公正的第三方檢驗是比較合宜的
          </strong>
        </div>
      </div>
    </div>
  )
}
