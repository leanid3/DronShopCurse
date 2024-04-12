import { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

function Myslider({ slides }) {
    const [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
                className={`flex transition ease-out duration-75`}
            >
                {slides.map((slide, index) => (
                    <img key={index} src={slide} alt={`Slide ${index}`} />
                ))}
            </div>
            <div className=" absolute top-0 flex w-full h-full justify-between items-center px-10">
                <button onClick={previousSlide}>
                    <FiArrowLeftCircle className="text-3xl" />
                </button>

                <button onClick={nextSlide}>
                    <FiArrowRightCircle className="text-3xl" />
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((index, key) => (
                    <div
                        onClick={() => setCurrent(key)}
                        key={"c" + key}
                        className={`rounded-full w-5 h-5 cursor-pointer ${
                            key == current ? "bg-white" : "bg-gray-500"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Myslider;
