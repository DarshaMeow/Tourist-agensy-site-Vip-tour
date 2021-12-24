import "./RecPlaces.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Photo from "./Photo/Photo";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1000, min: 600},
        items: 1,
    },
    mobile: {
        breakpoint: {max: 600, min: 0},
        items: 1,
    },
};

const RecPlaces = () => {
    const places = [
        {
            name: "Пирамиды, Египет",
            image:
                "https://cdn.profile.ru/wp-content/uploads/2020/11/Piramida-Giza-Egipet-pyramid-of-Giza.jpg",
        },
        {
            name: "Тадж-Махал, Индия",
            image:
                "https://images.firma-gamma.ru/images/0/9/g71035659334u.jpg",
        },
        {
            name: "Золотой мост, Вьетнам",
            image:
                "https://lifeglobe.net/x/entry/9099/1.jpg",
        },
        {
            name: "Храм истины, Таиланд",
            image:
                "https://top10.travel/wp-content/uploads/2016/06/hram-istiny.jpg",
        },
        {
            name: "Бурдж-Халифа, ОАЭ",
            image:
                "https://avatars.mds.yandex.net/get-zen_doc/133957/pub_5b18fd19380d8fee1ee560bb_5b18ff20380d8fee1ee560cb/scale_1200",
        },
        {
            name: "Мачу-Пикчу, Перу",
            image:
                "https://img.gazeta.ru/files3/479/7758479/9093323982_17b575ff37_o-pic905-905x505-69006.jpg",
        },
        {
            name: "Венеция, Италия",
            image:
                "https://public.mishka.travel/images/two_square_mini/7d6c5f175c8c7d3.jpg",
        },
        {
            name: "Петра, Иордания",
            image:
                "https://tour-stream.com/wp-content/uploads/2019/02/f27a1f10a618448d65e6ac16c9270e56-petra.jpg",
        },
        {
            name: "Лавандовые поля, Франция",
            image:
                "https://zelenyimir.ru/wp-content/uploads/2020/06/lavandovyie-polya-provansa-vo-frantsii-1.jpg",
        },
    ];

    return (
        <div className="RecPlaces">
            <div className="text">
                <h1>Места, которые мы рекомендуем</h1>
            </div>
            <div className="rec-places-list">
                <Carousel
                    centerMode={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile"]}
                    itemClass="carousel-item-padding-40-px"
                >
                    {places.map((place, id) => (
                        <Photo key={id} place={place}/>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default RecPlaces;
