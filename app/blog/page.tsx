import Link from "next/link";

const getData = async () => {
    const options = {
        next: {
            revalidate: 10,
        }
    }
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', options);
    
    return res.json();
};

export default async function Blog() {
    const data = await getData();
    
    return (
        <div>
            <h1>Blog page</h1>
            <ul>
                {data.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}