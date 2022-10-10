import Link from "next/link";


function Navbar() {
    return (
        <div>
            <nav>
                <Link href="/blog"><a> Blog</a></Link>
                <Link href="/post">post</Link>
                <Link href="/about">About</Link>
                <Link href="/abDDFout/SDDS">eRROR PAGE</Link>
            </nav>
            <h1>folder of companent  </h1>
        </div>
    );
}

export default Navbar;