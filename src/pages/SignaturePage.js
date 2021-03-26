import { useRef, useEffect, useState } from "react";
import SignatureCanvas from 'react-signature-canvas';
import paper from './images/paper.png'; // 1478 x 1108
import './sign.css';
// import SignaturePad from "signature_pad";

export const SignaturePage = () => {
  const [isMailed, setIsMailed] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [props, setProps] = useState({width: 50, height: 50});
  const DrawDOM = useRef(null);
  const noDOM = useRef(null);
  const floorDOM = useRef(null);
  const ofDOM = useRef(null);
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

  const generatePaper = (no, floor, of) => {
    const ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img, 464, 190, 120, 56);
      ctx.drawImage(img, 551, 654, 120, 56);
      ctx.drawImage(img, 1274, 654, 120, 56);
      ctx.font='40px Arial';

      // address
      ctx.fillText(no, 825 + 200, 165);
      ctx.fillText(floor, 945 + 200, 165);
      ctx.fillText(of, 1090 + 200, 165);

      const date = new Date();
      // date
      ctx.fillText(date.getFullYear() - 1911, 382, 886);
      ctx.fillText(date.getMonth() + 1, 676, 886);
      ctx.fillText(date.getDate(), 936, 886);

      const ctx2 = document.getElementById('canvas');
      post2DB({ no, floor, of, base64: ctx2.toDataURL()});

      // eslint-disable-next-line no-use-before-define
      // const win = window.open();
      // win.document.write('<img src="'+ctx2.toDataURL()+'"/>');
    };
    img.src = DrawDOM.current.toDataURL();
  }

  const post2DB = ({ no, floor, of, base64 }) => {
    fetch(base64)
      .then(res => res.blob())
      .then(blob => {
        const fd = new FormData();
        const file = new File([blob], `${no}號${floor}樓${of ? `之${of}`: ''}連署書.png`);
        fd.append('no', no);
        fd.append('of', of);
        fd.append('floor', floor);
        fd.append('image', file);

        // Let's upload the file
        // Don't set contentType manually → https://github.com/github/fetch/issues/505#issuecomment-293064470
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
    generatePaper(
      noDOM.current.value,
      floorDOM.current.value,
      ofDOM.current.value,
    );
  }

  return (
    <div className="SignaturePage">
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
            <select name="no" ref={noDOM}>
              <option value="1">1號</option>
              <option value="3">3號</option>
              <option value="5">5號</option>
              <option value="7">7號</option>
              <option value="9">9號</option>
              <option value="11">11號</option>
              <option value="13">13號</option>
              <option value="15">15號</option>
              <option value="17">17號</option>
            </select>
            <select name="floor" ref={floorDOM}>
              <option value="1">1樓</option>
              <option value="2">2樓</option>
              <option value="3">3樓</option>
              <option value="4">4樓</option>
              <option value="5">5樓</option>
              <option value="6">6樓</option>
              <option value="7">7樓</option>
              <option value="8">8樓</option>
              <option value="9">9樓</option>
              <option value="10">10樓</option>
              <option value="11">11樓</option>
              <option value="12">12樓</option>
              <option value="13">13樓</option>
              <option value="14">14樓</option>
              <option value="15">15樓</option>
            </select>
            <select name="of" ref={ofDOM}>
              <option value="">本號</option>
              <option value="1">之1</option>
              <option value="2">之2</option>
              <option value="3">之3</option>
            </select>
            <button>送出</button>
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
  )
}
