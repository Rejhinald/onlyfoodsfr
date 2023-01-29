import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
// import Product from './Product'

function DirectorLink() {
const {id} = useParams()
const [directors, setDirectors] = useState([])
    useEffect(() =>{
    async function fetchDirectors(){
        const {data} = await axios.get(`/api/directorproducts/${id}`)
        setDirectors(data);
        }
    fetchDirectors()
    
      }, [])
    return (
    <div>
        <Link to={`/directorproducts/${id}`}>wawa</Link>
    </div>
  )
}

export default DirectorLink