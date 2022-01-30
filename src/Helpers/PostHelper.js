import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const PostData = async (url) => {
    try {
      axios.post(url);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    PostData();
    fetchData();
  }, []);

  return { error, loading, data, PostData };
}
export default useFetch;
