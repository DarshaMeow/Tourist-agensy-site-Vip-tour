import {useNavigate} from "react-router-dom";

const Photo = ({place}) => {
    const {image, name} = place
    let navigate = useNavigate()
    return (
        <div className="photo">
            <div className="photo-img">
                <img src={image} alt={name}/>
                <div className="photo-text">{name}</div>
            </div>
        </div>
    );
};

export default Photo;