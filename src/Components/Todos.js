// Todos.js
import useFetch from '../useFetch';

function Todos() {
	const url = 'https://jsonplaceholder.typicode.com/todos';
	const {data: todos} = useFetch(url);
	return (
		<>
			<h1>Todos:</h1>
			{todos &&
				todos.map(item => (
					<p key={item.id}>
						{item.id}: {item.title}
					</p>
				))}
		</>
	);
}

export default Todos;
