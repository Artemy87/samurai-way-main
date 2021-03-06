import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DialogType} from "../../../Redux/dialogs-reducer";
import styles from './DialogsItem.module.css';


interface DialogsItemPropsType {
    dialogs: DialogType[]
}

export const DialogsItem:FC<DialogsItemPropsType> = (props) => {
    return (
        <div className={styles.dialogs}>
            {props.dialogs.map(d => {
                const path = `/dialogs/1`;
                return (
                    <div key={d.id} className={styles.dialog}>
                        <NavLink to={`/dialogs/${path}`}>{d.name}</NavLink>
                    </div>
                )
            })
            }
        </div>
    )
}