import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalize=(word)=>{
    const lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
    props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}</strong>  {props.alert.msg}
    </div>
  )
}
