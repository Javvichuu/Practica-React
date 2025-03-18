import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const addCategory = (value) => {
        const newArray = [...categories];
        if (!newArray.includes(value)) {
            newArray.push(value);
            setCategories(newArray);
        }
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory setCategories={addCategory} />

            {categories.map((value, index) => (
                <GifGrid
                    category={value}
                    key={index}
                />

            ))}
        </>
    );
};
