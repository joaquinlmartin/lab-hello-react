import Ironhacklogo from "./Ironhacklogo";
import Menubars from "./Menubars";

function SayHello() {
    return(
        <div className="head-all">
            <div className="nav">
                <Ironhacklogo />
                <Menubars />
            </div>
            <div className="hello-message">
                <h1>Say hello to <br /> ReactJS</h1>
                <p className="hello-text">You will learn how to use <br /> the most popular frontend library <br />and become a super Ninja developer.</p>
                 <div>
                 <button>Awesome!</button>
                </div>
            </div>
        </div>
    )
}

export default SayHello;