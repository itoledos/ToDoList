import './App.css';
import MyComponents from '../src/components/MyComponents';

function App() {
  const tabsList = [
    {
      label: 'Tabs 1',
      content: 'Favourite color: Blue'
  },
    {
      label: 'Tabs 2',
      content: 'Favourite Movie: Matrix'
  },
    {
      label: 'Tabs 3',
      content: 'Favourite meal: Pizza'
  },
    {
      label: 'Tabs 4',
      content: 'Favourite animal: Dog'
  },
    {
      label: 'Tabs 5',
      content: 'Favourite sport: Volleyball'
  }
  ];
  return (

    <div className="App">
      {/* <Reductor/> */}
      <MyComponents tabs={tabsList} />
    </div>
  );
}

export default App;
