import Data from './API'
import Card from './Card'
import Navigation from './Navigation';
import { useState } from 'react';

const uniqueList = [
    ...new Set(
        Data.map((curr) => {
            return curr.category;
        })
    ),
    "All",
];

const HarshalFlixHome = () => {
    const [movie, setMovie] = useState(Data);
    const filterItem = (category) => {
        if (category === "All") {
            setMovie(Data);
            return;
        }
        const updatedList = Data.filter((curr) => {
            return curr.category === category;
        });
        setMovie(updatedList);
    };
    return (
        <>
            <div className='bg-red-50'>
                <Navigation filterItem={filterItem} menuList={uniqueList} />
                <div className='flex justify-center mt-5 '>
                    <div className='max-w-[111em] w-full '>
                        <div className="relative mt-5 px-5 grid gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
                            <Card movies={movie} />
                        </div>
                    </div>
                </div>
                <footer className='bg-gray-900 text-gray-100 grid mt-10'>
                    <div className='max-w-6xl w-full mx-auto p-5 flex flex-col md:flex-row justify-between gap-x-5'>
                        <div>
                            &copy; 2023 HarshalFlix. All rights reserved. | Made by Harshal
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default HarshalFlixHome;