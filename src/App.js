import './App.css';
import MyComponents from '../src/components/MyComponents';

function App() {
  const tabsList = [
    {
      label: 'Tabs 1',
      content: 'Favourite color: Blue',
      bgColor: 'white'
    },
    {
      label: 'Tabs 2',
      content: 'Favourite Movie: Matrix',
      bgColor: 'white'
    },
    {
      label: 'Tabs 3',
      content: 'Favourite meal: Pizza',
      bgColor: 'white'
    },
    {
      label: 'Tabs 4',
      content: 'Favourite animal: Dog',
      bgColor: 'white'
    },
    {
      label: 'Tabs 5',
      content: 'Favourite sport: Volleyball',
      bgColor: 'white'
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
