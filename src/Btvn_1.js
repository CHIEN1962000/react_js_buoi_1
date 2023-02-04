import React from 'react'

export default function Btvn_1() {
    const isUserLoggedIn =  true;
  return (
    <div>
        <h1>Bài tập về nhà 1</h1>
        <h2>{isUserLoggedIn ? 'Hello User' :'Login Now'}</h2>
    </div>
  )
}
