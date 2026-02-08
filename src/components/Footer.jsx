const Footer = ({ mainText = "By this art you may contemplate" }) => {
  return (
    <div className="p-2">
      <style>{`
            .container {
              display: flex;
              flex-direction: column;
              height: auto;
              width: 100%;
              gap: 7px;
            }
            .one{
              font-family: monospace;
              font-size: x-small;
            }
            .box {
              width: 100%;
              border-top: var(--fill) solid var(--color-font-black);
              animation: drawLine var(--speed) ease forwards;
            }

            @keyframes drawLine {
              from { width: 0; }
              to { width: 100%; }
            }

            .box:nth-child(1) { --fill: 2px; --speed: 0.7s; }
            .box:nth-child(2) { --fill: 3px; --speed: 0.9s; }
            .box:nth-child(3) { --fill: 5px; --speed: 1s; }
            .box:nth-child(4) { --fill: 6px; --speed: 1.2s; }
            .box:nth-child(5) { --fill: 7px; --speed: 1.5s; }
            .box:nth-child(6) { --fill: 10px; --speed: 2s; }

            .intro-descrip {
              position: relative;
              background: var(--color-stone);
              width: 100%;
              display: flex;
              padding: 10px;
              justify-content: space-between;
              align-items: center;
              font-size: xx-large;
              font-family: sans-serif;
              font-weight: bold;
            }

            .intro-descrip::before {
              content: '';
              position: absolute;
              inset: 0;
              background: var(--color-font-black);
              transform: scaleY(0);
              transform-origin: top;
              z-index: 1;
              animation: fillIntro 1s ease 2s forwards;
            }

            .intro-descrip > * {
              position: relative;
              z-index: 2;
              color: var(--color-stone);
            }

            @keyframes fillIntro {
              to {
                transform: scaleY(1);
              }
            }
          `}</style>
      <section class="container">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
        <div class="box five"></div>
        <div class="box six"></div>
        <div class="intro-descrip">
          <span>{mainText}</span>
          <span>Enter</span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
