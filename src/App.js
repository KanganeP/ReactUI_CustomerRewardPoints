import './App.css';
// import DynamicDataRewards from './components/FunctionalComponent/DynamicData/CusRewardCalculation';
import StaticDataRewards from './components/FunctionalComponent/StaticData/CusRewardCalculation';
// import OtherSolution from './components/OtherSolution/CusRewardCalculation';

function App() {
  return (
    <div className="App">
      <header>
        {/* Access Dynamic Data of Funcational Component */}
             {/* <DynamicDataRewards />     */}

        {/* Access Static Data of Funcational Component */}
             <StaticDataRewards /> 

        {/* Access Other Solution Data */}
            {/* <OtherSolution />          */}
      </header>
    </div>
  );
}

export default App;
