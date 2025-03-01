import './NewBoardForm.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewBoardForm = (props) => { 
    //  creates state for 'title' and 'owner name':
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    // event handler for new title input
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    };

    // event handler for new owner input
    const onOwnerChange = (event) => {
        setOwner(event.target.value)
    };

    // event handler for posting a new board
    const submitNewBoard = (event) => {
        event.preventDefault();
        props.addBoardCallBack({
            title: title,
            owner: owner
        });
        setTitle('');
        setOwner('');
    };

    return (
        <form onSubmit={submitNewBoard}>
            <div className="new-board-form_form">
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={onTitleChange} className="new-board-form_input" />
                <label>Owner: </label>
                <input type="text" name="owner" value={owner} onChange={onOwnerChange} className="new-board-form_input"/>
                <input type="submit" value="Add Board" className="new-board-form_submit"/>
            </div>
        </form>
    );

};

export default NewBoardForm;

