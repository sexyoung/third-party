import './style.css';
import woman from './images/woman.png';
import real from './images/real.png';


export const Page2 = () => {
  return (
    <div>
      <h1 className="center">連署訴求</h1>
      <div className="row grey">
        <div className="col-12 col-md-3 center">
          <div className="img page2-img" style={{backgroundImage: `url(${woman})`}} />
          <strong>
            第三方公正單位驗收<br />
            確保<span className="blue">一次性</span>發現問題
          </strong>
        </div>
        <div className="col-12 col-md-3 center">
          <div className="img page2-img" style={{backgroundImage: `url(${real})`}} />
          <strong>
            提早要求營造廠解決<br />
            以免退場後<span className="red">修繕不易</span>
          </strong>
        </div>
      </div>
    </div>
  )
}
