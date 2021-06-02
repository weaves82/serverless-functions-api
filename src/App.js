import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('/.netlify/functions/quote-image-merge')
        setData(response.data)
        setLoading(false)
      }
      fetchData()
    },[])


  return (
    <div className="App">
      <h1>Serverless function fun - Ron <strike>Swan</strike>Dogson</h1>
      {loading ? <p> Loading... </p> : <><blockquote>{data.quote}</blockquote><img alt="" src = {`${data.image}`}/></>}
    </div>
  );
}

export default App;
