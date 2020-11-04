import React from 'react'
import { withRouter } from "react-router";
const SingleCustomer=(props)=> {
    console.log(props)
    const customer = props.customers.find(customer => {
        console.log(props.customers);
        return customer.id === Number(props.match.params.id)
    })
    console.log(customer)
    return (
        <div>
             {
                Object.keys(customer).map(value=>{
                    console.log(value)
                    return(
                        <>
                        <p><span style={{fontWeight: 'bold'}}>{value}: </span>{customer[value]}</p>
                        </>
                    )
                })
             }
        </div>
    )
}
export default withRouter(SingleCustomer)