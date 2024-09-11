import PropTypes from 'prop-types';


const Card = ({ card, handleCook }) => {
    // console.log(typeof card);
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card;

    return (
        <div className='p-5 border rounded-2xl space-y-4'>
            <img className='rounded-2xl h-[250px] w-full' src={recipe_image} alt="" />
            <h3 className='font-bold text-xl'>{recipe_name}</h3>
            <p>{short_description}</p>
            <hr />
            <ul className='list-disc list-inside'>
                <h3 className='mb-3 text-lg font-semibold'>Ingredients: {ingredients.length}</h3>
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </ul>
            <hr />
            <div className='flex gap-5 justify-between'>
                <div className='flex items-center gap-2'>
                    <i className="fa-regular fa-clock"></i><p>{preparing_time}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-fire-flame-curved"></i>
                    <p>{calories}</p>
                </div>
            </div>
            <button onClick={() => handleCook(card)} className='bg-green-400 rounded-3xl font-semibold btn'>Want to Cook</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleCook: PropTypes.func
}

export default Card;