import React from 'react'
import { FirstName, LastName } from '../App'
const ComC = () => {
  return (
    <React.Fragment>
      <FirstName.Consumer>
        {(fname) => (
          <LastName.Consumer>
            {(lname) => (
              <h1>
                My name is {fname} {lname}
              </h1>
            )}
          </LastName.Consumer>
        )}
      </FirstName.Consumer>
    </React.Fragment>
  )
}

export default ComC
