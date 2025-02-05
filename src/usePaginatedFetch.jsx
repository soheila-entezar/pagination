import { useEffect, useState } from "react";
import chunk from 'lodash.chunk'

const usePaginatedFetch = (url, pageSize) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData=async()=>{
      const response=await fetch(url)
      const data=await response.json()
      const pagination=chunk(data, pageSize);
      setData(pagination)
      setLoading(false)
    }
    useEffect(() => {
        fetchData()
      },[])
     
    return [loading, data];
}

export default usePaginatedFetch;