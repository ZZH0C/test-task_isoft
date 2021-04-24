import {action,makeObservable, observable} from "mobx";
import * as React from "react"

class NameState {
    value = {
        nameData: '',
        surnameData: '',
        className: '',
    }

    constructor(value) {
        makeObservable(this, {
            value: observable,
            showModal: action,
            closeModal:action
        })
        this.value = value;
    }

    showModal(newNameValue,newSurnameValue) {
        this.value = {
            nameData: newNameValue,
            surnameData: newSurnameValue,
            className: 'modal-window',
        }
    }

    closeModal(){
        this.value = {
            nameData: '',
            surnameData: '',
            className: 'modal-window hidden',
        }
    }
}

export const testStore = new NameState({
    nameData: '',
    surnameData: '',
    className: 'modal-window hidden',
})

export default {testStore}
