import React from 'react'
import { useParams } from 'react-router'

const SingleServices = () => {
    const {id} = useParams();
  return (
    <div>
      single Services {id}
    </div>
  )
}

export default SingleServices
