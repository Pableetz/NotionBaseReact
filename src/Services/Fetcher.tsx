//  service fetcher joke chuck norris random

// fetcher 

import axios from "axios";



export const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};