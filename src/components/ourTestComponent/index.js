import React, {useCallback, useState} from "react";
import {observer} from "mobx-react-lite";
import {OurModalWindow} from "../modal";

export const AlmostLoginScreen = observer(({ testStore }) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const [styles, setStyles] = useState({
        input_1: 'input-default',
        input_2: 'input-default',
        alertText_1: 'alert-text hidden',
        alertText_2:'alert-text hidden'
    })

    const doSomtthing = useCallback((name,pass) => {
        testStore.showModal(name,pass);
    }, []);

    function alertWithWrongData(name,pass) {
        if (!name && !pass){
        setStyles({
            input_1: 'input-alert',
            input_2: 'input-alert',
            alertText_1: 'alert-text',
            alertText_2:'alert-text'
        })}
        if (name && !pass){
            setStyles({
                input_1: 'input-default',
                input_2: 'input-alert',
                alertText_1: 'alert-text hidden',
                alertText_2:'alert-text'
            })}
        if (!name && pass){
            setStyles({
                input_1: 'input-alert',
                input_2: 'input-default',
                alertText_1: 'alert-text',
                alertText_2:'alert-text hidden'
            })}
    }

    function login(name, pass) {
        if (name && pass) {
            setStyles({
                input_1: 'input-default',
                input_2: 'input-default',
                alertText_1: 'alert-text hidden',
                alertText_2:'alert-text hidden'
            })
            doSomtthing(name,pass)
        } else {
            alertWithWrongData(name,pass);
        }
    }

    return (
        <div className="form1">
            <OurModalWindow state={testStore}/>
            <div className="former">
                <div className={'form-text-area-container'}>
                    <div className="centerAlign">
                        <p>Name</p>
                        <input className={styles.input_1} type='text' placeholder="Enter name"
                               value={name}
                               onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.alertText_1}>
                        Please enter valid name!
                    </div>
                    <div className="centerAlign">
                        <p>Surname</p>
                        <input className={styles.input_2} type='text' placeholder="Enter surname"
                               value={surname}
                               onChange={e => setSurname(e.target.value)}/>
                    </div>
                    <div className={styles.alertText_2}>
                        Please enter valid surname!
                    </div>
                </div>

                <button
                    className='custom-button'
                    onClick={() => login(name, surname)}
                >
                    Done
                </button>
            </div>
        </div>
    );
})

export default {AlmostLoginScreen}
