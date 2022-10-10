import { useRouter } from "next/router";

const PageNo = () => {

    const router= useRouter();

    const pageNo = router.query.AgeNo;

    return (
        <div>
            <h1>This is the Age {pageNo} years</h1>
        </div>
    );
};

export default PageNo;