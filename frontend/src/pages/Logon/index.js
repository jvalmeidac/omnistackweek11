import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import './styles.css'

import api from '../../services/api'
import logo from '../../assets/logo.svg'
import heroesimage from '../../assets/heroes.png'

export default function Logon() {
    const [id, setID] = useState();
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('profile');
        } catch(err){
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Logo" />

                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>

                    <input 
                    placeholder="Sua ID" 
                    value={id}
                    onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesimage} alt="Heroes" />
        </div>
    );
}