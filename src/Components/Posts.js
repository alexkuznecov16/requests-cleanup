// Posts.js
import useFetch from '../useFetch';

function Posts() {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	const {data: posts} = useFetch(url);
	return (
		<>
			<h1>Posts</h1>
			{posts &&
				posts.map(item => (
					<p key={item.id}>
						{item.id}: {item.title}
					</p>
				))}
		</>
	);
}

export default Posts;
