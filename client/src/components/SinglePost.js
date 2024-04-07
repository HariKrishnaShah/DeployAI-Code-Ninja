import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

export default function SinglePost() {
    const params = useParams();
  return (
    <div>SinglePost {params.id}</div>
  )
}
