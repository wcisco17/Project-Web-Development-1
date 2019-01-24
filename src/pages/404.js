import React from 'react'
import { ListLink  } from "../components/nav"


const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
   }
}

export default () => {
  <React.Fragment>
    <div style={styles.container} >
        <h1>404 Page</h1>
        <ListLink to="/" >
            Back Home
        </ListLink>
   </div>
  </React.Fragment>
}
