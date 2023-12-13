import React from 'react'
import {TailSpin} from "react-loader-spinner"

const Loading = () => {
  return (
    <div>
        <TailSpin
          height="200"
          width="500"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    </div>
  )
}

export default Loading