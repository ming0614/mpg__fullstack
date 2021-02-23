import React from 'react';
import { renderRoutes } from 'react-router-config';
function Rank(props) {
    const { route } = props;
    return (
        
        <div>Rank
            {renderRoutes(route.routes)}
        </div>
    )
}

export default Rank;
