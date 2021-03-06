import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'
import logo from '../../assets/logo.svg'
import './style.css'

export default function NewIncident() {
    const history = useHistory();
    const ongId = localStorage.getItem('ongID');

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso!');
        };
    }

    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo" />
                    <h1>Cadastro</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói que resolva isso.</p>
                    <Link className='back-link' to='/profile' >
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}

                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};