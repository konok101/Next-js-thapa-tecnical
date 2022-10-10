import Link from "next/link";


const index = () => {
  return (
    <div>

      <nav>
        <Link href="/blog"><a> Blog</a></Link>
        <Link href="/post">post</Link>
        <Link href="/about">About</Link>
      </nav>
      <h1>home companent index</h1>
    </div>
  );
};

export default index;