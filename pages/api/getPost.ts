import API_URL from '@/apikey';
import axios from 'axios';


export default async function getPost(start:Number, end:Number){
  const res = await axios.get(`${API_URL}/${start}/${end}`);
  const data = await res.data;
  return data.tvYeyakCOllect.row;
}