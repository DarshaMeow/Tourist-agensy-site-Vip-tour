import {useNavigate} from "react-router-dom";

const CountryCard = ({card, click, setClick}) => {
    const {id, cardText, cardImg} = card
    let navigate = useNavigate()
    return (
        <div className="photo">
            <div className="photo-img">
                <img src={cardImg} alt={cardText}/>
                <div className="photo-text">
                    <button onClick={() => {
                        !click ? setClick(true) : setClick(false)
                        navigate(`/tour/${id}`)
                    }}>
                        {cardText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;