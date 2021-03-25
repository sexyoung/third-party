import './style.css';

export const Page3 = () => {
  return (
    <div>
      <h1 className="center">優缺點分析</h1>
      <table style={{ height: '40vh' }}>
        <thead className="page-3-title">
          <tr><td colSpan="2">另找第三方單位驗收</td></tr>
          <tr className="page-3-title2"><td width="50%">優點</td><td width="50%">缺點</td></tr>
        </thead>
        <tbody>
          <tr>
            <td>重新全面檢查，可補原本不足，一次發現缺失並修繕，避免未來社區高額修繕費用與住戶權益</td>
            <td>另外一筆費用</td>
          </tr>
        </tbody>
      </table>

      <table style={{ height: '40vh' }}>
        <thead className="page-3-title">
          <tr><td colSpan="2">原有驗收方式</td></tr>
          <tr className="page-3-title2"><td width="50%">優點</td><td width="50%">缺點</td></tr>
        </thead>
        <tbody>
          <tr>
            <td>更新會找中華建經協助，費用已包含</td>
            <td>檢驗報告與程序尚未公開供住戶檢視，同時目前許多缺失如漏水，車道閘門等未被列出</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
