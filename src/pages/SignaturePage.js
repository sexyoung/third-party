import { useRef, useEffect, useState } from "react";
import SignatureCanvas from 'react-signature-canvas';
import paper from './images/paper.png'; // 1478 x 1108
import './sign.css';
// import SignaturePad from "signature_pad";

import { No } from "./No";
import { Of } from "./Of";
import { Floor } from "./Floor";

export const SignaturePage = () => {
  const [street, setStreet] = useState('');
  const [no, setNo] = useState('');
  const [of, setOf] = useState('');
  const [floor, setFloor] = useState('');
  const [isMailing, setIsMailing] = useState(false);
  const [isMailed, setIsMailed] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [props, setProps] = useState({width: 50, height: 50});
  const DrawDOM = useRef(null);
  // const noDOM = useRef(null);
  // const floorDOM = useRef(null);
  // const ofDOM = useRef(null);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setProps({
        width: window.innerWidth,
        height: window.innerHeight * .8,
      });
    })

    setProps({
      width: window.innerWidth,
      height: window.innerHeight * .8,
    });

    const ctx = document.getElementById('canvas').getContext('2d');
    // const ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img,0,0);
    };
    img.src = paper;
  }, []);

  const handleClear = () => {
    document.location.reload();
  }

  const generatePaper = (obj) => {
    // console.log(obj.street);
    const streetName = obj.street.slice(0, 2);
    const streetType = obj.street.slice(2, 3);
    const lane = obj.street.slice(3, 6);
    const alley = obj.street.slice(7, 9);
    const ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img, 464, 190, 120, 56);
      ctx.drawImage(img, 551, 654, 120, 56);
      ctx.drawImage(img, 1274, 654, 120, 56);
      ctx.font='40px Arial';

      // address
      ctx.fillText(streetName, 480, 165);

      ctx.beginPath();
      ctx.lineWidth = 5;
      if(streetType === '路')
        ctx.arc(617, 155, 30, 0, 2 * Math.PI);
      else
        ctx.arc(672, 155, 30, 0, 2 * Math.PI);
      ctx.stroke();
      
      ctx.fillText(lane, 730, 165);
      ctx.fillText(alley, 900, 165);
      ctx.fillText(no, 825 + 190, 165);
      floor && ctx.fillText(floor, 945 + 200, 165);
      of && ctx.fillText(of, 1090 + 200, 165);

      const date = new Date();
      // date
      ctx.fillText(date.getFullYear() - 1911, 382, 886);
      ctx.fillText(date.getMonth() + 1, 676, 886);
      ctx.fillText(date.getDate(), 936, 886);

      const ctx2 = document.getElementById('canvas');
      post2DB({ street: obj.street, no, floor, of, base64: ctx2.toDataURL()});

      // eslint-disable-next-line no-use-before-define
      // const win = window.open();
      // win.document.write('<img src="'+ctx2.toDataURL()+'"/>');
    };
    img.src = DrawDOM.current.toDataURL();
  }

  const post2DB = ({ street, no, floor, of, base64 }) => {
    const title = (`${street}${no}號${floor}樓${of ? `之${of}`: ''}`);
    fetch(base64)
      .then(res => res.blob())
      .then(blob => {
        const fd = new FormData();
        const file = new File([blob], `${street}${no}號${floor}樓${of ? `之${of}`: ''}連署書.png`);
        fd.append('title', title);
        fd.append('image', file);

        // Let's upload the file
        // Don't set contentType manually → https://github.com/github/fetch/issues/505#issuecomment-293064470
        setIsMailing(true);
        const API_URL = `${process.env.REACT_APP_MAIL_SERVER}/upload`;
        fetch(API_URL, {method: 'POST', body: fd})
          .then(res => res.json()) 
          .then(res => {
            if(res === 'ok') {
              setIsSigned(false);
              setIsMailed(true);
            }
          })
      });
  }

  const handleEnd = () => {
    setIsSigned(true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    var obj = {};
    var formData = new FormData(e.target);
    for (var key of formData.keys()) {
      if(formData.get(key)) {
        obj[key] = formData.get(key);
      }
    }
    generatePaper(obj);
  }

  const handleNo = (no) => {
    setNo(no);
    setOf('');
  }

  const handleAddress = (e) => {
    setStreet(e.target.value);
    setNo('');
    setFloor('');
    setOf('');
  }

  return (
    <div className="SignaturePage">
      <div className="SignatureBlock">
        {!isMailed && <>
          <div className="hint">請把手機打橫進行簽名</div>
            <div className={"drawBlock" + (isSigned ? ' hide': '')}>
              <div className="buttonBlock">
                <button className="buttonSubmit" onClick={handleEnd}>簽完</button>
                <button className="buttonClear" onClick={handleClear}>重簽</button>
              </div>
              <div className="pls" id="pls">請簽名</div>
              <SignatureCanvas
                className="SignatureCanvas"
                ref={DrawDOM}
                minWidth={4}
                maxWidth={5}
                onBegin={() => { document.getElementById('pls').style.display = 'none'; }}
                canvasProps={{...props, className: 'sigCanvas'}}
              />
            </div>
          {isSigned && (
            <form className="form" onSubmit={handleSubmit}>
              <h1>您的地址是：</h1>
              <select name="street" value={street} onChange={handleAddress}>
                <option value="">請選擇</option>
                <option value="康樂街136巷30弄">康樂街136巷30弄</option>
                <option value="康樂街136巷29弄">康樂街136巷29弄</option>
                <option value="東湖路113巷">東湖路113巷</option>
              </select>
              {!!street && <No {...{ no, handleNo, street }} />}
              {street === '康樂街136巷30弄' && !!no && <Floor {...{no, floor, setFloor}} />}
              {!!street && !!no && <Of {...{street, no, of, setOf}} />}
              <button disabled={isMailing}>送出</button>
            </form>
          )}
          <canvas id="canvas" width="1762" height="928" />
        </>}
        {isMailed && (
          <div>
            已連署完成，謝謝您的參與！
          </div>
        )}
      </div>
    </div>
  )
}
