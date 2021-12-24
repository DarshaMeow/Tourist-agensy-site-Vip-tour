import "./Destination.style.css";
import CountryCard from "../../Card/CountryCard";
import {useContext} from "react";
import {AppContext} from "../../../App";

const Destination = ({click, setClick}) => {
    const {tours} = useContext(AppContext)
    const destinationCards = [
        {
            id: 0,
            cardText: "Египет",
            cardImg: "https://img.icons8.com/color/48/000000/egypt.png",
        },
        {
            id: 0,
            cardText: "Турция",
            cardImg: "https://img.icons8.com/color/48/000000/turkey.png",
        },
        {
            id: 0,
            cardText: "Доминикана",
            cardImg: "https://img.icons8.com/color/48/000000/dominican-republic.png",
        },
        {
            id: 0,
            cardText: "Таиланд",
            cardImg: "https://img.icons8.com/color/48/000000/thailand.png",
        },
        {
            id: 0,
            cardText: "Вьетнам",
            cardImg: "https://img.icons8.com/color/48/000000/vietnam.png",
        },
        {
            id: 0,
            cardText: "Кипр",
            cardImg: "https://img.icons8.com/color/48/000000/cyprus.png",
        },
        {
            id: 0,
            cardText: "Куба",
            cardImg: "https://img.icons8.com/color/48/000000/cuba.png",
        },
        {
            id: 0,
            cardText: "Греция",
            cardImg: "https://img.icons8.com/color/48/000000/greece.png",
        },
    ];
    let mappedDestination = destinationCards.map(country => {
        let index = tours.map(obj => obj.title).indexOf(country.cardText)
        if (index !== -1) {
            country.id = tours[index].id
        }
        return country
    })

    return (
        <div className="destination">
            <div className="destination-wrapper">
                <div className="destination-photo-container">
                    {
                        mappedDestination.map(card => {
                            // console.log(card)
                            return <CountryCard key={card.id} card={card} click={click} setClick={setClick}/>
                        })
                    }
                </div>
                <div className="link">
                    <a href="/countries" className="header__item"
                       onClick={() => (!click ? setClick(true) : setClick(false))}>Все страны</a>
                </div>
                <div className="link">
                    <a href="https://tourism.gov.ru/contents/covid-19/deystvuyushchie-ogranicheniya-po-vezdu-v-inostrannye-gosudarstva/"
                       target="_blank">Посмотреть полный список открытых стран</a>
                </div>
            </div>
        </div>
    );
};

export default Destination;
