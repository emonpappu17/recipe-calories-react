import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Card from './Card';
import Cooks from "./Cooks";

const Cards = () => {
    const [Cards, setCards] = useState([]);
    const [cooks, setCooks] = useState([]);
    const [preparing, setPreparing] = useState([]);
    

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    const handleCook = cook => {
        const newCook = [...cooks, cook]
        let uniqueArray = [...new Set(newCook)];
        setCooks(uniqueArray);
    };

    const handlePreparing = pre => {
        console.log('ok', pre);
        const remaining = cooks.filter(cook => cook.recipe_id !== pre.recipe_id)
        setCooks(remaining);
        setPreparing([...preparing, pre]);
    };

    return (
        <div className="lg:flex justify-between gap-4 space-y-4 items-start">
            <div className='grid md:grid-cols-2 max-w-[900px] gap-6	'>
                {
                    Cards.map(card => <Card key={card.recipe_id} card={card} handleCook={handleCook}></Card>)
                }
            </div>
            <div className="border p-4 rounded-2xl h-fit flex-1">
                <Cooks cooks={cooks} handlePreparing={handlePreparing} preparing={preparing}></Cooks>
            </div>
        </div>
    );
};

Cards.propTypes = {
    preparing: PropTypes.array
}
export default Cards; 