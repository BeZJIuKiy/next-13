import { Metadata } from 'next';

interface Props {
	params: {
		id: string;
	};
}

type GetBlog = (id: string) => Promise<any>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const blog = await getBlog(params.id);
    console.log(blog);

	return {
		title: blog.title,
	};
}

const getBlog: GetBlog = async (id) => {
	const options = {
		next: {
			revalidate: 10,
		},
	};
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options);

	return res.json();
};

export default async function Post({ params }: Props) {
	const blog = await getBlog(params.id);

	return (
		<div>
			<h1>{blog.title}</h1>
			<p>{blog.body}</p>
		</div>
	);
}
