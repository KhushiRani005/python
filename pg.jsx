import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const pgList = [
  { id: 1, name: "Sunrise PG", location: "New Delhi", price: "₹5000/month", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Cozy Nest Hostel", location: "Mumbai", price: "₹7000/month", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Green Stay PG", location: "Bangalore", price: "₹6500/month", image: "https://via.placeholder.com/150" }
];

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Find Your Perfect PG/Hostel</h1>
      <input
        type="text"
        placeholder="Search by location..."
        className="border p-2 w-full mt-2"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {pgList
          .filter(pg => pg.location.toLowerCase().includes(search))
          .map(pg => (
            <div key={pg.id} className="border p-4 rounded shadow">
              <img src={pg.image} alt={pg.name} className="w-full h-40 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{pg.name}</h2>
              <p>{pg.location}</p>
              <p className="font-bold">{pg.price}</p>
              <Link to={`/pg/${pg.id}`} className="text-blue-500">View Details</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

const PGDetails = ({ id }) => {
  const pg = pgList.find(pg => pg.id === parseInt(id));
  if (!pg) return <h2>PG Not Found</h2>;

  return (
    <div className="p-4">
      <img src={pg.image} alt={pg.name} className="w-full h-60 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-2">{pg.name}</h1>
      <p className="text-lg">📍 {pg.location}</p>
      <p className="text-xl font-bold">💰 {pg.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Contact Owner</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <Link to="/" className="text-xl font-bold">PG Rental</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pg/:id" element={({ match }) => <PGDetails id={match.params.id} />} />
      </Routes>
    </Router>
  );
};

export default App;
