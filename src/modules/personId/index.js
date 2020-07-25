import React from 'react'
import { withRouter } from 'react-router-dom'

const PersonId = ({match}) => {
    const {params} = match
    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    )
}

export default withRouter(PersonId)
