import React from 'react'

const Helmet = (props) => {
    document.title = 'Aremxy Business Ent -' + props.title;
  return (
    <div>{props.children}</div>
  )
}

export default Helmet