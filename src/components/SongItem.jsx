import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerCotext'

const SongItem = ({name,image,desc,id}) => {

  const {playwithId} = useContext(PlayerContext);
  return (
    <div onClick={()=>playwithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="" className="rounded" />
        <p className="mt-2 mb-1 font-bold">{name}</p>
        <p className="text-sm text-slate-200">{desc}</p>
    </div>
  )
}

export default SongItem
