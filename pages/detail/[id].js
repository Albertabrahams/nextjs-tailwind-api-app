import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../../context'

const Detail = () => {
    const router = useRouter()
    const { id } = router.query
    const {data} = useContext(Context)

    return (
        <div>
            <h1>Detail {id}</h1>
        </div>
    )
}

export default Detail;