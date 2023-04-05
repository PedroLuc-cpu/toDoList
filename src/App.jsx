import Header from './components/Header'
import PostTask from './components/PostTask';
function App() {
    const task = [
      {
        id: 1,
        tasklist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      },
    ];


  return (
    <div>
      <Header />
      {
        task.map(myTasks =>{
          return <PostTask key={myTasks.id} Tasklist={myTasks.tasklist} />;
        })
      }
    </div>
  );
}

export default App
