import { useRef, useEffect, useState } from "react";
import SignatureCanvas from 'react-signature-canvas';
import paper from './images/paper.png'; // 1478 x 1108
import './sign.css';
// import SignaturePad from "signature_pad";

export const SignaturePage = () => {
  const [props, setProps] = useState({width: 50, height: 50});
  const DrawDOM = useRef(null);
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

  const handleSubmit = () => {
    console.log(DrawDOM.current.toDataURL());
    const ctx = document.getElementById('canvas').getContext('2d');

    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img, 364, 173, 120, 56);
      ctx.drawImage(img, 431, 554, 120, 56);
      ctx.drawImage(img, 1024, 564, 120, 56);
      ctx.font='40px Arial';

      // address
      ctx.fillText("11", 825, 160);
      ctx.fillText("7", 931, 160);
      ctx.fillText("1", 1055, 160);

      const date = new Date();
      // date
      ctx.fillText(date.getFullYear() - 1911, 308, 754);
      ctx.fillText(date.getMonth() + 1, 528, 754);
      ctx.fillText(date.getDate(), 748, 754);
      // document.getElementById('canvas').style.display = 'block';

      const ctx2 = document.getElementById('canvas');
      console.warn(ctx2.toDataURL());
      // window.open(ctx2.toDataURL(), '_blank');

      // eslint-disable-next-line no-use-before-define
      const win = window.open();
      win.document.write('<img src="'+ctx2.toDataURL()+'"/>');
    };
    console.log(DrawDOM.current.toDataURL());
    img.src = DrawDOM.current.toDataURL();
  }

  return (
    <div className="SignaturePage">
      <div className="hint">請把手機打橫進行簽名</div>
      <div className="drawBlock">
        <div className="buttonBlock">
          <button className="buttonSubmit" onClick={handleSubmit}>簽完</button>
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
      <canvas id="canvas" width="1478" height="1108" />
    </div>
  )
}
