import React from 'react'
import { useState, useEffect } from 'react'
function withData(WrappedComponent, url) {
  return function EnchancedComponent(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setLoading(true);
        fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, [])
    return <WrappedComponent data={data} loading={loading} error={error} />
  }
}

export default withData
