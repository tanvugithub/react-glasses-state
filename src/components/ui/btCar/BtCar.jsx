import React, { useState } from "react";

export const BtCar = () => {
    const [src, setSrc] = useState("black-car.jpg");

    const handleImg = (img) => {
        setSrc(img);
    };

    const cars = [
        {
            name: "Red",
            img: "red-car.jpg",
            class: "bg-red-500",
        },
        {
            name: "Black",
            img: "black-car.jpg",
            class: "bg-gray-800",
        },
        {
            name: "Steel",
            img: "steel-car.jpg",
            class: "bg-stone-400",
        },
        {
            name: "Silver",
            img: "silver-car.jpg",
            class: "bg-neutral-300",
        },
    ];

    return (
        <div className="mt-5">
            <h2 className="font-bold text-2xl">BT Car</h2>
            <div className="flex mt-8">
                <div className="flex-1">
                    <img src={`./images/${src}`} />
                </div>
                <div className="flex-1">
                    <div className="flex gap-3 ml-5">
                        {cars.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        handleImg(item.img);
                                    }}
                                    className={`${item.class} text-white px-2 py-1 rounded-md`}
                                >
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
