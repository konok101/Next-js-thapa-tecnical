import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            data
        }

    };


};

const blog = ({ data }) => {
    return (
        <div>
            {
                data.slice(0, 5).map((currentEl) => {

                    return <div key={currentEl.id}>

                        <h3>{currentEl.id}</h3>
                        <Link href={`/blog/${currentEl.id}`}>
                            <h2>{currentEl.title}</h2>
                        </Link>

                    </div>

                })
            }

        </div>
    );
}

export default blog;