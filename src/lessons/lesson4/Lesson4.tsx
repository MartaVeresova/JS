import React from 'react'
import './lesson_4';
import {onClickCreate, onClickReject, onClickResolve} from './lesson_4';

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={onClickCreate}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={onClickResolve}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={onClickReject}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;