import React from 'react';

const Deletebtn = (props) => {
    return (<>
        <div className='todo_style'>
            <i className="fa fa-times" aria-hidden="true" onClick={() => { props.Delete(props.id) }} />
            <li>{props.abc}</li>
        </div>
    </>);
}

export default Deletebtn;