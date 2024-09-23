import Link from "next/link";

const Home = () => {
    return (
        <>
            <h1>Welcome to Home page</h1>
            <h2>
                <Link href="/blog">blog</Link>
            </h2>
            <h2>
                <Link href="/settings">settings</Link>
            </h2>
            <h2>
                <Link href="/conference">conference</Link>
            </h2>
            
 
        </>
    );

}

export default Home; 