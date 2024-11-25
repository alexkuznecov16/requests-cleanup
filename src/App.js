// App.js
import './App.css';
import Posts from './Components/Posts';
import Todos from './Components/Todos';

function App() {
	return (
		<div className='App'>
			<div>
				<Todos />
			</div>
			<div>
				<Posts />
			</div>
		</div>
	);
}

export default App;
