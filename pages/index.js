import axios from 'axios';
import Link from 'next/link'
import { useContext } from 'react';
import { Context } from '../context';

export default function Home() {
  const {data, setPage, fetchData} = useContext(Context)

  const HandleSearch = (e) => {
    fetchData();
    }

  return (
    <div>
      <input type="text" 
      onChange={(e)=> setPage(e.target.value)} 
      className="flex items-center bg-gray-500"
      placeholder='Enter a page number..' />
      <button onClick={HandleSearch} className="bg-blue-600" >Search</button>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1' >
        {data.map(item => 
          <Link href={`/detail/${(item.id)}`} key={item.id}>
          <div className="m-3 rounded border-2 flex flex-col items-center">
           <p className='font-bold text-xl mb-2'>{item.name}</p>
           <img src={item.image} alt="foto" width="150px" /> 
           </div>
           </Link>
           )}
           
          
      </div>
    </div>
  );
}
