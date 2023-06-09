'use client';
import forms from './AddMovie.module.css';
import Image from 'next/image';
import modes from './Switch.module.css';
import { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
    const [mode, setMode] = useState(true);
    const [imdbUrl, setImdbUrl] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState([]);
    const [stars, setStars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleIMDB = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('/api/imdb', { imdbUrl });
            setTitle(response.data.title);
            setYear(response.data.year);
            setRating(response.data.rating);
            setDescription(response.data.description);
            setGenre(response.data.genre);
            setStars(response.data.stars);
        } catch (error) {
            console.error('Error:', error.message);
        }
        setIsLoading(false);
    };
    const [movie, setMovie] = useState({
        id: null,
        type: "movie",
        imdb: imdbUrl,
        image: "",
        title: title,
        year: year,
        rating: rating,
        description: description,
        language: [""],
        category: [genre],
        stars: [stars],
        downloadLinks: [
            {
                quality: "",
                url: "",
            },
        ],
        episodes: [
            {
                id: null,
                title: "",
                downloadLinks: [
                    {
                        quality: "",
                        url: "",
                    },
                ],
            },
        ],
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMovie((prevState) => ({ ...prevState, [name]: value, }));
    };
    const handleLanguageChange = (event, index) => {
        const { value } = event.target;
        const languages = [...movie.language];
        languages[index] = value;
        setMovie((prevState) => ({ ...prevState, language: languages, }));
    };
    const handleCategoryChange = (event, index) => {
        const { value } = event.target;
        const categories = [...movie.category];
        categories[index] = value;
        setMovie((prevState) => ({ ...prevState, category: categories, }));
    };
    const handleStarsChange = (event, index) => {
        const { value } = event.target;
        const stars = [...movie.stars];
        stars[index] = value;
        setMovie((prevState) => ({ ...prevState, stars: stars, }));
    };
    const handleDownloadLinksChange = (event, index, fieldName) => {
        const { value } = event.target;
        const downloadLinks = [...movie.downloadLinks];
        downloadLinks[index][fieldName] = value;
        setMovie((prevState) => ({ ...prevState, downloadLinks: downloadLinks, }));
    };
    const handleEpisodesChange = (event, index, fieldName) => {
        const { value } = event.target;
        const episodes = [...movie.episodes];
        episodes[index][fieldName] = value;
        setMovie((prevState) => ({ ...prevState, episodes: episodes, }));
    };
    const handleEpisodeDownloadLinksChange = (event, episodeIndex, downloadLinkIndex, fieldName) => {
        const { value } = event.target;
        const episodes = [...movie.episodes];
        episodes[episodeIndex].downloadLinks[downloadLinkIndex][fieldName] = value;
        setMovie((prevState) => ({ ...prevState, episodes: episodes, }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/addmovie', movie);
            if (response.status === 200) {
                alert('Movie added successfully!');
            } else {
                alert('There was an error adding the movie. Please try again.');
            }
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Image src="/logo.png" className={`m-auto mt-3`} alt="logo" width={200} height={40} priority={true} />
            <div className={`${forms.mainCard} card m-auto mt-4 mb-96 shadow-xl shadow-slate-300`}>
                <div className="card-header">
                    <div className={`${modes.switchbody} ${modes.all}`}>
                        <div className={modes.switchbutton}>
                            <input className={modes.switchbuttoncheckbox} type="checkbox" onClick={() => {
                                mode ? (movie.type = "webseries", setMode(false)) : (movie.type = "movie", setMode(true));
                            }}></input>
                            <label className={modes.switchbuttonlabel} htmlFor=""><span className={modes.switchbuttonlabelspan}>Movie</span></label>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form method="POST">
                        <div className='flex'>
                            <input
                                placeholder='IMDB URL'
                                name="imdb"
                                type="text"
                                autoComplete="false"
                                required
                                value={imdbUrl}
                                onChange={(e) => { setImdbUrl(e.target.value); }}
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 ms-4 me-2 my-2 mt-3"
                            />
                            <button type="button" onClick={handleIMDB} className="w-2/5 items-center ms-0 my-2 justify-center px-1 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm focus:ring-blue-500 me-4 mt-3 h-[36px]" disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Get Details'}
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <input
                                placeholder='Image Path'
                                name="image"
                                type="text"
                                autoComplete="false"
                                required
                                value={movie.image}
                                onChange={handleInputChange}
                                className={`block w-2/4 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 ms-4 my-1 col-4 ${forms.row1}`}
                            />
                            <input
                                placeholder='Title'
                                name="title"
                                type="text"
                                autoComplete="false"
                                required
                                value={title}
                                onChange={(e) => { setTitle(e.target.value); }}
                                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1 my-1 col-4 ${forms.row1}`}
                            />
                            <input
                                placeholder='Year'
                                name="year"
                                type="text"
                                autoComplete="false"
                                required
                                value={year}
                                onChange={(e) => { setYear(e.target.value); }}
                                className={`block w-2/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1 my-1 col-4 ${forms.row1}`}
                            />
                            <input
                                placeholder='Rating'
                                name="rating"
                                type="text"
                                autoComplete="false"
                                required
                                value={rating}
                                onChange={(e) => { setRating(e.target.value); }}
                                className={`block w-2/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 me-4 my-1 col-4 ${forms.row1}`}
                            />
                        </div>
                        <div className='flex items-center'>
                            {/* <input
                                placeholder='Description'
                                name="description"
                                type="text"
                                autoComplete="false"
                                required
                                value={description}
                                onChange={(e) => { setDescription(e.target.value); }}
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 mx-4 my-2 mt-3"
                            /> */}
                            <textarea
                                placeholder='Description'
                                name="description"
                                autoComplete="false"
                                required
                                value={description}
                                onChange={(e) => { setDescription(e.target.value); }}
                                rows={4}
                                style={{ minHeight: '1em', maxHeight: '9em' }}
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 mx-4 my-2 mt-3"
                            />
                        </div>
                        <div className="flex justify-between mx-3">
                            <div className="w-full md:w-4/12">
                                <div className="flex flex-wrap justify-start items-center">
                                    {movie.language.map((language, index) => (
                                        (<input
                                            key={`language-${index}`}
                                            placeholder='Language'
                                            type="text"
                                            autoComplete="false"
                                            required
                                            value={language}
                                            onChange={(e) => handleLanguageChange(e, index)}
                                            className="block w-4/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                        />)
                                    ))}
                                    <div className="bg-white shadow-md rounded-md ms-1 text-blue-800 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                        setMovie((prevState) => ({ ...prevState, language: [...prevState.language, ""], }));
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12">
                                <div className="flex flex-wrap justify-start items-center">
                                    {imdbUrl == '' && movie.category.map((category, index) => (
                                        (<input
                                            key={`category-${index}`}
                                            placeholder='Category'
                                            type="text"
                                            autoComplete="false"
                                            required
                                            value={genre}
                                            onChange={(e) => handleCategoryChange(e, index)}
                                            className="block w-4/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                        />)
                                    ))}
                                    {imdbUrl != '' && genre.map((category, index) => (
                                        (<input
                                            key={`category-${index}`}
                                            placeholder='Category'
                                            type="text"
                                            autoComplete="false"
                                            required
                                            value={category}
                                            onChange={(e) => handleCategoryChange(e, index)}
                                            className="block w-4/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                        />)
                                    ))}
                                    <div className="bg-white shadow-md rounded-md ms-1 text-blue-800 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                        setMovie((prevState) => ({ ...prevState, category: [...prevState.category, ""], }));
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12">
                                <div className="flex flex-wrap justify-start items-center">
                                    {imdbUrl == '' && movie.stars.map((star, index) => (
                                        (<input
                                            key={`star-${index}`}
                                            placeholder='Star'
                                            type="text"
                                            autoComplete="false"
                                            required
                                            value={stars}
                                            onChange={(e) => handleStarsChange(e, index)}
                                            className="block w-4/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                        />)
                                    ))}
                                    {imdbUrl != '' && stars.map((star, index) => (
                                        (<input
                                            key={`star-${index}`}
                                            placeholder='Star'
                                            type="text"
                                            autoComplete="false"
                                            required
                                            value={star}
                                            onChange={(e) => handleStarsChange(e, index)}
                                            className="block w-4/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                        />)
                                    ))}
                                    <div className="bg-white shadow-md rounded-md ms-1 text-blue-800 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                        setMovie((prevState) => ({ ...prevState, stars: [...prevState.stars, ""], }));
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {mode ? (
                            <>
                                <div className="flex mt-2 mx-3 justify-start items-center">
                                    <h6 className="m-1">Download Links :</h6>
                                    <div className="bg-white shadow-md rounded-md ms-2 text-blue-800 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                        setMovie((prevState) => ({ ...prevState, downloadLinks: [...prevState.downloadLinks, { quality: "", url: "" },], }));
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    {movie.downloadLinks.map((downloadLink, index) => (
                                        <div key={`downloadLink-${index}`} className="flex justify-start items-center">
                                            <input
                                                placeholder='Quality'
                                                type="text"
                                                autoComplete="false"
                                                required
                                                value={downloadLink.quality}
                                                onChange={(e) => handleDownloadLinksChange(e, index, "quality")}
                                                className="block w-1/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                            />
                                            <input
                                                placeholder='URL'
                                                type="text"
                                                autoComplete="false"
                                                required
                                                value={downloadLink.url}
                                                onChange={(e) => handleDownloadLinksChange(e, index, "url")}
                                                className="block w-3/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                            />
                                            <div className="bg-white shadow-md rounded-md ms-2 text-red-500 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                                const downloadLinks = [...movie.downloadLinks];
                                                downloadLinks.splice(index, 1);
                                                setMovie((prevState) => ({ ...prevState, downloadLinks: downloadLinks, }));
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                            :
                            (
                                <>
                                    <div className="flex mt-2 mx-3 justify-start items-center">
                                        <h6 className="ms-1 me-2">Episodes :</h6>
                                        <div className="bg-white shadow-md rounded-md ms-2 text-blue-800 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                            setMovie((prevState) => ({
                                                ...prevState, episodes: [
                                                    ...prevState.episodes, {
                                                        id: null, title: "", description: "", downloadLinks: [{ quality: "", url: "" }],
                                                    },
                                                ],
                                            }));
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {movie.episodes.map((episode, episodeIndex) => (
                                        <>
                                            <div key={`episode-${episodeIndex}`} className="flex mx-3 mb-1 mt-1 items-start">
                                                <div className="flex items-center">
                                                    <input
                                                        placeholder='Title'
                                                        type="text"
                                                        autoComplete="false"
                                                        required
                                                        value={episode.title}
                                                        onChange={(e) => handleEpisodesChange(e, episodeIndex, "title")}
                                                        className="block w-4/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                                    />
                                                    <div className="bg-white shadow-md rounded-md ms-2 text-red-500 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                                        const episodes = [...movie.episodes];
                                                        episodes.splice(episodeIndex, 1);
                                                        setMovie((prevState) => ({ ...prevState, episodes: episodes, }));
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="flex m-1 mx-3 justify-start items-center">
                                                        <h6 className="ms-1 me-2">Download Links :</h6>
                                                        <div className="bg-white shadow-md rounded-md ms-2 text-blue-800 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                                            const episodes = [...movie.episodes];
                                                            episodes[episodeIndex].downloadLinks.push({ quality: "", url: "", });
                                                            setMovie((prevState) => ({ ...prevState, episodes: episodes, }));
                                                        }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {episode.downloadLinks.map((downloadLink, downloadLinkIndex) => (
                                                        <div key={`episodeDownloadLink-${downloadLinkIndex}`} className='flex mt-1 items-center ms-3'>
                                                            <input
                                                                placeholder='Quality'
                                                                type="text"
                                                                autoComplete="false"
                                                                required
                                                                value={downloadLink.quality}
                                                                onChange={(e) => handleEpisodeDownloadLinksChange(e, episodeIndex, downloadLinkIndex, "quality")}
                                                                className={`block w-2/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 ms-1 me-4 my-1 col-4 ${forms.row1}`}
                                                            />
                                                            <input
                                                                placeholder='URL'
                                                                type="text"
                                                                autoComplete="false"
                                                                required
                                                                value={downloadLink.url}
                                                                onChange={(e) => handleEpisodeDownloadLinksChange(e, episodeIndex, downloadLinkIndex, "url")}
                                                                className="block w-3/5 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 m-1"
                                                            />
                                                            <div className="bg-white shadow-md rounded-md ms-2 text-red-500 p-1 w-6 h-6 cursor-pointer" onClick={() => {
                                                                const episodes = [...movie.episodes];
                                                                episodes[episodeIndex].downloadLinks.splice(downloadLinkIndex, 1);
                                                                setMovie((prevState) => ({ ...prevState, episodes: episodes, }));
                                                            }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <hr className="hr" />
                                        </>
                                    ))}
                                </>
                            )
                        }
                    </form>
                </div >
                <div className="card-footer">
                    <div className="flex justify-center items-center">
                        <button className={`${forms.submitButton} inline-flex items-center my-2 justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddMovie;