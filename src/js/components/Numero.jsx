import React, { useState, useEffect } from "react";
import "../../styles/index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Card from "./Card";

const Numero = () => {
    const espaciosParaCards = 6
    const [iniciarCounter, setIniciarCounter] = useState(false)
    const [counter, setCounter] = useState(999998)


    const handlerClickReiniciar = () => {
        setCounter(0)
        setIniciarCounter(false)
    }

    useEffect(() => {
        if (iniciarCounter) {
            const intervalo = setInterval(() => {
                setCounter(prev => prev + 1)
            }, 1000)

            return () => clearInterval(intervalo)
        }
    }, [iniciarCounter])

    let counterEnString = counter.toString()

    while (counterEnString.length < espaciosParaCards) {
        counterEnString = "0" + counterEnString
    }

    const numerosSeparados = counterEnString.split("");

    return (
        <div className="rectangulo d-flex flex-column justify-content-center align-items-center gap-3" >
            <div className="gap-3 d-flex" >
                <Card numero={<FontAwesomeIcon icon={faClock} />}/>
                {numerosSeparados.map((digito, index) => (
                    <Card key={index} numero={digito} />
                ))}
            </div>
            <div className="d-flex gap-3">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setIniciarCounter(true)}>
                    Iniciar counter
                </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => setIniciarCounter(false)}>
                    Detener counter
                </button>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handlerClickReiniciar()}>
                    Reiniciar counter
                </button>
            </div>

        </div>
    )
}

export default Numero

