import './Navigation.css';
import logo from '../../../public/logo.png';
import Image from 'next/image';

function Navigation({ filterItem, menuList }) {
    return (
        <>
            <div className='grid fixed top-0 w-full m-0 z-20 ring-2  ring-red-300 ring-opacity-50 ring-offset-0
             backdrop-blur-lg backdrop-saturate-200 bg-white  bg-opacity-60 '>
                <Image src={logo} className='mx-auto w-[25vh] h-auto mt-2 animate-[logo-animation_1s_ease]' alt="HarshalFlix" />
            </div>
            <div className='relative'>
                <div className='relative h-[10vh]'></div> {/* DONT remove this its used for above space for fixed navbar */}
                <nav className='relative'>
                    <ul className='flex gap-x-5 gap-y-2 mt-1 justify-center flex-wrap'>
                        {menuList.map((curelem) => {
                            return (
                                <li key={curelem} className=''>
                                    <button className='px-2 py-1 bg-red-500 text-white rounded-lg cursor-pointer
                                hover:bg-red-600 
                                focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2
                                active:scale-95 active:transition-all'

                                        onClick={() => { filterItem(curelem) }}>{curelem}</button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navigation;