import React from 'react'

export function Data({data}) {
    console.log('fshfkjshkjfhskhf',data);
  return (
    <div>
        <p>{data?.userName}</p>
        <p>{data?.pass}</p>
    </div>
  )
}

