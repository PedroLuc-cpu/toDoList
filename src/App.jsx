import Header from './components/Header'
import PostTask from './components/PostTask';
function App() {
    const task = [
      {
        id: 1,
        tasklist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        completed: true,
      },
    ];


  return (
    <div>
      <Header />
      <PostTask/>
    </div>
  );
}

export default App
