import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Erpage = () => {
    const router = useRouter();

    const handleHomePage = () => {

        router.push("/")
    };

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 300000)
    }, [])


    return (
        <div>
            <h1>rrr error page</h1>
            {/*     <Link href='/'><a>go to home page</a></Link> */}
            {/*    <a onClick={() => router.push('/')}>go to home page</a> */}
            <a onClick={handleHomePage}>go to home page</a>
        </div>
    );
};

export default Erpage;