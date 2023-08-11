'use client';
import Data from './api'
import Card from './Card'
import logo from '../../../public/logo.png';
import { useState } from 'react';
import Image from 'next/image';
import './Navigation.css';

const uniqueList = [
    ...new Set(
        Data.map((curr) => {
            return curr.category;
        })
    ),
    "All",
];

const page = () => {
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
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const filtered = Data.filter((option) =>
            option.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
        value == "" ? setMovie(Data) : setMovie(filteredOptions);
    };
    /*  const handleOptionSelect = (option) => {
         setInputValue(option.title);
         setFilteredOptions([]);
     }; */
    return (
        <>
            <div className='bg-red-50'>
                <div className='grid fixed top-0 w-full m-0 z-20 ring-2  ring-red-300 ring-opacity-50 ring-offset-0
             backdrop-blur-lg backdrop-saturate-200 bg-white  bg-opacity-60'>
                    <Image src={logo} className='mx-auto w-[25vh] h-auto mt-2 animate-[logo-animation_1s_ease]' alt="HarshalFlix" />
                </div>
                <div className='relative'>
                    <div className='relative h-[8vh]'></div> {/* DONT remove this its used for above space for fixed navbar */}
                    <nav className='relative flex flex-wrap justify-center items-center'>
                        <ul className='flex gap-x-5 gap-y-2 items-center justify-center flex-wrap'>
                            {uniqueList.map((curelem) => {
                                return (
                                    <li key={curelem}>
                                        <button className='px-2 py-1 bg-red-500 text-white rounded-lg cursor-pointer
                                hover:bg-red-600 
                                focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2
                                active:scale-95 active:transition-all'
                                            onClick={() => { filterItem(curelem) }}>{curelem}</button>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='md:relative md:w-48 md:ms-20 mt-2 mb-0'>
                            <div className="flex items-center ml-auto">
                                <input
                                    type="text"
                                    className="custom-placeholder form-control mb-2 border-2 border-[#991B1B] rounded p-2"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder='Search Movie or Web-Series'
                                />
                            </div>
                        </div>
                    </nav>
                </div>
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

export default page;