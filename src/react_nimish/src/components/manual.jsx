import React from 'react'
// import { Simulate } from './simulate'

export const Manual = (props) => {

  const CreatePlane = (param) => {
    return {
      name: param[0],
      fuel: param[1],
      type: param[2],
      emergency: param[3],
      priority: undefined,
    };
  };

  let planes = []

  planes.push(CreatePlane(['a123', 123, 'cargo', true]))
  planes.push(CreatePlane(['a1234', 1234, 'passenger', false]))
  planes.push(CreatePlane(['a12345', 12345, 'jet', false]))

  console.log('nimish')
  console.log(planes)
  return (
    <div>
      {props.Child}
    </div>
  )
}
