import CardDeclarative from "./CardDeclarative"
import CardComponents from "./CardComponents"
import CardJsx from './CardJsx';
import CardSingleWay from './CardSingleWay';

function Cards() {
    return(
        <div className="cards">
            < CardDeclarative />
            < CardComponents />
            < CardSingleWay />
            < CardJsx />
        </div>
    )
}

export default Cards;