import React from 'react'
const Input = ({field:{fields:{field_type,field_id}}}) => 
{
    return (
    <div className="form-group ">
        <label htmlFor="exampleInputEmail1">{field_id}</label>
        <input type={field_type} className="form-control" id={field_id} aria-describedby="emailHelp" placeholder={field_id} />
        </div>
        )}
        export default Input