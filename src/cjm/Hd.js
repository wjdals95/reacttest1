function colorActive(activeColor){
    document.body.classList = activeColor;
}

function Hd() {
    return (
        <header id="hd" className="fixed-top border-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="col-1"><a href="#"><img src="./cjm/img/logo.png" alt="" className="img-fluid" /></a></h1>
                <ul id="gnb" className="d-flex">
                    <li><a href="#about">CJM</a></li>
                    <li><a href="#protfolio">work</a></li>
                    <li><a href="contact">contact</a></li>
                </ul>
                <div id="colorBase">
                    <button className="darkVer" onClick={() => {colorActive('darkmode')}}>night</button>
                    <button className="lightVer" onClick={() => {colorActive('lightmode')}}>day</button>
                </div>
            </div>
        </header>
      );
}

export default Hd;