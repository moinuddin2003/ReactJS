import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/moinuddin2003')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         }
    //         )   
    //     return () => {
    //     }
    // }, [])

    const data = useLoaderData();

    

    return (
        <div className='m-4 p-4 bg-gray-500 text-white'>Github Followers : {data.followers}
            <img src={data.avatar_url} alt='GitHub Profile Picture' width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/moinuddin2003')
    return response.json();
}