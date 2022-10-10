import Link from "next/link";
import { useRouter } from "next/router";

const Erpage = () => {
    const router = useRouter();
    return (
        <div>
            <h1>rrr error page</h1>
            {/*     <Link href='/'><a>go to home page</a></Link> */}
            <a onClick={() => router.push('/')}>go to home page</a>
        </div>
    );
};

export default Erpage;