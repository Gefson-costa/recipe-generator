import React from 'react';
import '../App.css';
import chefImage from '../images/chef.png';

const CookingAnimation = () => {
    return (
        <div className="cooking-animation">
            {/* Chef animado */}
            <img
                src={chefImage}
                alt="Chef cooking"
                className="chef-animation"
            />

            {/* Panela principal */}
            <div className="pot">
                <div className="pot-body"></div>
                <div className="pot-handle"></div>
            </div>

            {/* Elementos de cozinha */}
            <div className="kitchen-tools">
                <div className="knife"></div>
                <div className="spoon"></div>
                <div className="fork"></div>
            </div>

            {/* Ingredientes flutuantes */}
            <div className="ingredients">
                <div className="ingredient tomato"></div>
                <div className="ingredient onion"></div>
                <div className="ingredient carrot"></div>
            </div>

            {/* Efeitos de cozimento */}
            <div className="steam"></div>
            <div className="steam steam2"></div>
            <div className="steam steam3"></div>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </div>
    );
};

export default CookingAnimation;
