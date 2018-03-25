import React from 'react';
import EditPen from './editImg';
import DeleteIcon from "./DeletIcon";
import './styles.scss';

const Control = () => (
    <div className="control">
        <EditPen />
        <DeleteIcon />
    </div>
);

export default Control;
