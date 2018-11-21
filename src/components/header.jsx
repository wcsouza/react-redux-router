import React from 'react';
import { Link } from "react-router-dom";

export default props => (
    <ul>
        <li> <Link to="/">Teste 1</Link></li>
        <li> <Link to="/teste2">Teste 2</Link></li>
        <li> <Link to="/teste3">Teste 3</Link></li>
        <li> <Link to="/teste4/1">Param1</Link></li>
        <li> <Link to="/teste4/3">Param3</Link></li>
    </ul>
)