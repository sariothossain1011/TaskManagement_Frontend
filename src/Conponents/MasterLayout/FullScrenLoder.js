import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'



const FullScrenLoder = () => {
  const loader = useSelector((state)=> state.settings.loader)
  return (
    <Fragment>
      <div className={loader+"LoadingOverlay d-none"}>
        <div className="Line-Progress">
          <div className="indeterminate">

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FullScrenLoder