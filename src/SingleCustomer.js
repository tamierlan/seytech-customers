import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Button } from 'reactstrap';
import './App.css';
import _ from 'lodash';

class SingleCustomer extends Component {
    constructor(props) {
        super()
        const single = props.customers.find(customer => {
        return customer.id === Number(props.match.params.id)
        })
        const original = _.cloneDeep(single);

        this.state = {
            editMode: false,
            single, 
            original
        }
    }
    componentDidMount() {
    
}
    editMode = () => {
        this.setState({ editMode: true })
        
    }
    saveMode = () => {
        const original = _.cloneDeep(this.state.single);
        
        this.setState({
            editMode: false, 
            original
        })
    }

    cancelMode = () => {
        const single = _.cloneDeep(this.state.original);
        console.log(this.state.original);
        
        this.setState({
            editMode: false, 
            single,
            
         })
    }
    letter = (e) => {
        const { name, value } = e.target;
        const copySingle = this.state.single;
        copySingle[name] = value;
        this.setState({ copySingle})

        
        // const val = this.state.single
        // if (e.target.name === 'name') {
        // val.name = e.target.value            
        // } else if (e.target.name === 'id') {
        // val.id = e.target.value            
        // }else if (e.target.name === 'email') {
        // val.email = e.target.value            
        // }else if (e.target.name === 'github') {
        // val.github = e.target.value            
        // }
        // this.setState({single: val})
    }
    
    render() { 
        const editBtn = !this.state.editMode && <Button onClick={this.editMode}>Edit</Button>;
        const saveBtn = this.state.editMode && <Button onClick={this.saveMode}>Save</Button>;
        const cancelBtn = this.state.editMode && <Button onClick={this.cancelMode}>Cancel</Button>;
    
        return (  
          <div>
            {  
                    Object.keys(this.state.single).map(key => {
                        if (key === 'avatar') {
                            return (<div>
                                      <h4>{key}:   <img src={this.state.single[key]} /> </h4>
                                     
                                    </div>)  
                        }else{
                            return (
                                this.state.editMode ? <div> <span className = 'span'> <strong>{key}:</strong> </span>
                                    <input name={key} onChange={this.letter} type='text' value={this.state.single[key]} /> 
                                    </div>: 
                            <h4>{key}: {this.state.single[key]} </h4>)
                        
                        }

                   })
            }
                              
            {editBtn}
            {saveBtn}
            {cancelBtn} 
           
        </div>)
    }
}

export default withRouter(SingleCustomer);