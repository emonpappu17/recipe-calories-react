import Cards from "./Cards";

const Main = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center space-y-4 mb-9">
                <h2 className="text-3xl font-bold">Our Recipes</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Main;