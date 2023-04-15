import Link from 'next/link';
import style from '@/styles/Error.module.css';

const Error = () => {
    return (
        <>
            <div className={style.errorcontainer}>
                <div className={style.errorcontent}>
                    <h1 className={style.errorcode}>404</h1>
                    <h2 className={style.errortitle}>Page Not Found</h2>
                    <p className={style.errormessage}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <Link href="/" className={style.gohomebtn}>Go Home</Link>
                </div>
            </div>
        </>
    )
}

export default Error;