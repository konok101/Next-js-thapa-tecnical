import { useState } from "react";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map((currentEl) => {
        return {
            params: {
                AgeNo: currentEl.id.toString(),

            },

        }
    })

    return {

        paths,
        fallback: false,
    }


}

export const getStaticProps = async (context) => {
    const id = context.params.AgeNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(res);
    const data = await res.json();

    return {
        props: {
            data
        }

    };

};


const Pageo = ({ data }) => {
    const { id } = data;

    const [add, setadd] = useState(0);
    const a = parseInt(id);
    const b = a + a;

    const handleadd = () => {
        setadd(add + b)
    }


    return (
        <div key={data.id}>

            <h1>{data.body}</h1>
            <h3>assa{data.title}</h3>
            {add}

            <button onClick={handleadd}>add</button>


        </div>
    );
};

export default Pageo;