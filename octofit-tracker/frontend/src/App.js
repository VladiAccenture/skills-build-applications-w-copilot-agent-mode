
import './App.css';
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="logo" width="40" height="40" className="d-inline-block align-top me-2" />
            <img src={octofitLogo} alt="Octofit Logo" style={{height: '40px', marginRight: '8px'}} />
            Octofit Tracker
          </Link>
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="40" height="40" className="d-inline-block align-top me-2" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="App-header card p-4 text-center">
              <img src={logo} className="App-logo mb-3" alt="logo" />
              <h2 className="display-5 mb-3">Welcome to Octofit Tracker!</h2>
              <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
              <button className="btn btn-primary btn-lg">Get Started</button>
            </div>
          } />
        </Routes>
      </div>
      {/* Example Bootstrap Modal (hidden by default, for extensibility) */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              This is a Bootstrap modal example.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
