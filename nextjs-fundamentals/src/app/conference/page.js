import Link from "next/link";

const Conference = () => {
    return (
        <>
            <h2>
            <Link href="/conference/sessions">conference/sessions</Link>
            </h2>
            <h2>
                <Link href="/conference/speakers">conference/speakers</Link>
            </h2>
        </>
        
    );

}

export default Conference;