import './App.css';
import { TotalCosts } from './components/costs';
import { Members } from './components/members';
import { TimeTicker } from './components/time-ticker';
import { UserList } from './components/user-list';
import { useZoomClients } from './hooks/useZoomClients';

function App() {
  const { clients, totalCost, timeElapsed, addMember,removeMember } = useZoomClients()
  return (
    <div className="app">
      <h2 className="appHead">Zoom Analyzer</h2>
      {/* <a href="/install">install to zoom</a> */}
      <div>
        <button onClick={addMember}>user join</button>
        <button onClick={removeMember} style={{marginLeft:5}}>user leave</button>
      </div>
      <div className="hbox">
        <Members value={clients.length} />
        <TotalCosts value={totalCost} />
        <TimeTicker value={timeElapsed} />
      </div>
      <UserList clients={clients}/>
    </div>
  );
}

export default App;
