import React from 'react'

export default function Btvn_2() {
    const mocdata = [
        {
          name: 'Chien',
          age: 23
        },
        {
          name: 'Duy',
          age: 20
        },
        {
          name: 'Viet',
          age: 18
        },
        {
          name: 'Linh',
          age: 19
        }
    ];
  return (
    <div>
        <h1>Bài tập về nhà 2</h1>
        <ul>
            {mocdata.map((item, index) => (
                <div key={index}>
                    <div>{item.name} {item.age}</div>
                </div>
            ))}
        </ul>
    </div>
  )
}
