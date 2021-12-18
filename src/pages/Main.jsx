import React from 'react';
import Send from "./Send";



const Main = () => {

    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.966611336119!2d58.99071091528462!3d53.41542327723678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d12f40ccc1027d%3A0xa4349e810bac784a!2z0YPQuy4g0J7QutGC0Y_QsdGA0YzRgdC60LDRjywgMjEsINCc0LDQs9C90LjRgtC-0LPQvtGA0YHQuiwg0KfQtdC70Y_QsdC40L3RgdC60LDRjyDQvtCx0LsuLCA0NTUwMjM!5e0!3m2!1sru!2sru!4v1639848753742!5m2!1sru!2sru"
                width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            <Send/>
        </div>
    );
};

export default Main;
