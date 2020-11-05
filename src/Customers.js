 import React, {Component} from 'react';
import { Table } from 'reactstrap';
import {Link } from 'react-router-dom';
import './App.css';
import {DebounceInput} from 'react-debounce-input';
class Customers extends Component {
  constructor() {
    super()
    this.state ={
      value: '',
      searchOpt: 'name'
    }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value })
    console.log('Searched');
  }
onOptionChange = (e) => {
    this.setState({searchOpt: e.target.value})
  }
  render() {
    const { customers } = this.props;
    const { value , searchOpt} = this.state;
    const filteredCustomers = customers.filter(eachCst=> {
      return eachCst.[searchOpt].toLowerCase().includes(value.toLowerCase());
    }) 
    return (
      <div>
        <DebounceInput placeholder = 'Debounce'
          minLength={2}
          onChange={this.onChange}
          debounceTimeout={600}
          />
        <input placeholder = 'regular search' onChange={this.onChange} />
        <select onChange = {this.onOptionChange}>
          <option value = 'name' >Name</option>
          <option value = 'email' >Email</option>
          <option value = 'githu' >GitHub</option>
          <option value = 'id' >#Id</option>
        </select>
        <Table striped className="customers">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>State</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Payment</th>
              <th>Courses</th>
              <th>Role</th>
              <th>Github</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredCustomers.map(customer=>{
                const { id, name, lastName, avatar, email, state, phone,
                role, github, courses, payment } = customer;
                return (
                <tr>
                  <th scope="row">{id}</th>
                  <td><img src={avatar} alt='Avatar'/></td>
                  <td> <Link to={`/customer/${id}`}>{name} {lastName}</Link></td>
                  <td>{state}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{payment}</td>
                  <td>{courses}</td>
                  <td>{role}</td>
                  <td>{github}</td>
                  <td>Actions</td>
                </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
export default Customers;