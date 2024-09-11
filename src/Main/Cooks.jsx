import PropTypes from 'prop-types';
// import Prepared from './Prepared';

const Cooks = ({ cooks, handlePreparing, preparing }) => {
    // console.log(preparing);
    // console.log(typeof cooks);

    return (
        <div className='space-y-4'>
            <div>
                <h2 className="text-center text-xl font-bold">Want to cook: {cooks.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cooks.map((cook, idx) =>
                                    <tr key={idx}>
                                        <th>{idx}</th>
                                        <td>{cook.recipe_name}</td>
                                        <td>{cook.preparing_time}</td>
                                        <td>{cook.calories}</td>
                                        <td><button onClick={() => handlePreparing(cook)} className='btn rounded-3xl bg-green-400 font-bold'>Preparing</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h2 className="text-center text-xl font-bold">Currently cooking:{preparing.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                preparing.map((pre, idx) =>
                                    <tr key={idx}>
                                        <th>{idx}</th>
                                        <td>{pre.recipe_name}</td>
                                        <td>{pre.preparing_time}</td>
                                        <td>{pre.calories}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array,
    handlePreparing: PropTypes.func,
    preparing: PropTypes.array
}

export default Cooks;