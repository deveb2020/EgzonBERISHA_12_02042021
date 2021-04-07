import React from 'react'
import '../style/PageNotFound.css'
import pageNotFound from '../Photos/pageNotFound.gif'

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <img src={pageNotFound} alt="404..." />
            <h1>404</h1>
            <h3>Page non trouvée</h3>
        </div>
    )
}
