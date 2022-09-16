import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [collection, setCollection] = useState([]);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(25)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${q}&_page=${page}&_limit=${limit}`)
        .then(res => res.json())
        .then(data => setCollection(data))
        .catch((err) => {
          console.log(err.message);
       });

    }, [q, page, limit]);

  return (
    <div className="App">
      <header className="App-header">
        to-do list
      </header>
      <div className='App-body'>
          <div className='section-filters'>
              <input type="text" onChange={event => setQ(event.target.value)} placeholder="q"></input>
              <input type="text" onChange={event => setPage(event.target.value)} placeholder="page"></input>
              <input type="text" onChange={event => setlimit(event.target.value)} placeholder="limit"></input>
          </div>
          <div className='section-collection'>
            {collection.map(item => (
              <p key={item.id}>{item.id} {item.title}</p>
            ))}
          </div>
          <p style={{color: "white"}}>page: {page}</p>
          <p style={{color: "white" , 'margin-left': "5px"}}>limit: {limit}</p>
      </div>
    </div>
  );
}

export default App;
