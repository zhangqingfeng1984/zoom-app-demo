import './App.css';
import { TotalCosts } from './components/costs';
import { Members } from './components/members';
import { TimeTicker } from './components/time-ticker';
import { useZoomClients } from './hooks/useZoomClients';

function App() {
  const { clients } = useZoomClients()

  return (
    <div className="app">
      <h1 className="appHead">Hello Zoom App</h1>
      {/* <a href="/install">install to zoom</a> */}
      <div className="hbox">
        <Members/>
        <TotalCosts/>
        <TimeTicker/>
      </div>
      <div className='tableWrapper'>
        <table width="100%" border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>level</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((o) => {
              return (
                <tr key={o.soeid}>
                  <td>{o.soeid}</td>
                  <td>{o.name}</td>
                  <td>{o.level}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
