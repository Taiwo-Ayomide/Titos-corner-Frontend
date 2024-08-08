import React, { useEffect, useState } from "react";
import axiosInstance from "../requestMethods";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? `${text.slice(0, 100)}...` : text}
            <span
                onClick={toggleReadMore}
                className="text-green-500 cursor-pointer"
            >
                {isReadMore ? " read more" : " show less"}
            </span>
        </p>
    );
};

const Food = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axiosInstance.get("/recipe");
                const data = response.data;

                if (Array.isArray(data)) {
                    setRecipes(data)
                } else {
                    console.error('Expected an array but got:', data)
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <section className="pt-24 flex flex-wrap justify-center overflow-hidden">
            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    className="bg-white w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 shadow-xl m-3 p-5"
                    data-aos="flip-up"
                    data-aos-duration="3000"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="p-5">
                            <article className="flex flex-col items-start justify-between">
                                <div className="relative">
                                    <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-auto" />
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
                                        {recipe.name}
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600 text-justify">
                                        {recipe.backgroundstory}
                                    </p>
                                    <div className="mt-8">
                                        <h1 className="uppercase font-bold">Ingredients</h1>
                                        <ul className="font-semibold text-gray-900">
                                            {recipe.ingredients}
                                            {/* {recipe.ingredients.map((ingredient, index) => (
                                                <li key={index}>{ingredient}</li>
                                            ))} */}
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <h1 className="uppercase font-bold">Steps</h1>
                                        <ReadMore className="mt-2 text-sm leading-6 text-gray-600 text-justify">
                                            {recipe.steps}
                                        </ReadMore>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Food;
