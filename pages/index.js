import Link from "next/link";
import Navbar from "../components/Navbar";


const index = () => {
  return (
    <div>

      {/*       <nav>
        <Link href="/blog"><a> Blog</a></Link>
        <Link href="/post">post</Link>
        <Link href="/about">About</Link>
      </nav> */}
      <Navbar></Navbar>


      <h1 className="com">home companent index</h1>
    </div>
  );
};

export default index;