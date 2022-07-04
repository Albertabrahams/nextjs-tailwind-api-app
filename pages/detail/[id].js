import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../../context'

const Detail = () => {
    const router = useRouter()
    const { id } = router.query
    const {data} = useContext(Context)

    return (
        <div>
            
            {data?.filter(item => item.id == id).map(item =>
                <div className="flex flex-col items-center" key={id} >
                    <h1 className="text-4xl mb-2">{item.name}</h1>
                    <img src={item.image} alt="foto" width="150px" />
                    <p className="text-xl">{item.species}</p>
                    <p className="text-xl">{item.status}</p>
                    <p className="text-xl">{item.gender}</p>
                    <p className="text-xl">{item.location.name}</p>
                    <p className="text-xl">{item.origin.name}</p>
                </div>
            )}

        </div>
    )
}

export default Detail;