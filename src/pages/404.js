import Link from "next/link";
import style from './Error.module.css';
const Error = () => {
    return (
        <>
            <div class={style.errorContainer}>
                <h1 class={style.errorTitle}>404</h1>
                <p class={style.errorMessage}>Oops! The page you're looking for could not be found.</p>
                <Link class={style.errorButton} href="/">Go back to Home</Link>
            </div>
        </>
    )
}

export default Error;