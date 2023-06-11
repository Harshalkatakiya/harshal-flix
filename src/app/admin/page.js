'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Admin = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "", password: ""
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const submitUser = (e) => {
        e.preventDefault();
        if (user.email === 'mdown6469@gmail.com' && user.password === 'NextJs001@') {
            setLoggedIn(true);
            router.push('/admin/addmovie');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }
    return (
        <>
            {!loggedIn &&
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <Link href="/">
                            <Image className="mx-auto" src="/logo.png" height={40} width={200} alt="Harshal Flix" priority={true} />
                        </Link>
                        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Login to your Account
                        </h2>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" method="POST">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="false"
                                        required
                                        value={user.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link
                                            href="/admin"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="false"
                                        required
                                        value={user.password}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={submitUser}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <Link
                                href="/"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Go to HomePage
                            </Link>
                        </p>
                    </div>
                </div>}
        </>
    )
}

export default Admin;