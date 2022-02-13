import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


class ApartmentNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            // get the data form key and value from the mockApartment
            newApartment: {
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "",
                user_id:"" 
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { newApartment } = this.state
        newApartment[e.target.name] = e.target.value
        this.setState({ newApartment: newApartment })
    }

    handleSubmit = () => {
        this.props.createApartment(this.state.newApartment)
        this.setState({submitted:true})
    }

  render() {
    return (
      <>
        <Form>
            <FormGroup>
                <Label for="name">Street</Label>
                <Input
                type="string"
                name="street"
                onChange={this.handleChange}
                value={this.state.newApartment.street}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">City</Label>
                <Input
                type="string"
                name="city"
                onChange={this.handleChange}
                value={this.state.newApartment.city}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">State</Label>
                <Input
                type="string"
                name="state"
                onChange={this.handleChange}
                value={this.state.newApartment.state}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Manage</Label>
                <Input
                type="string"
                name="manager"
                onChange={this.handleChange}
                value={this.state.newApartment.manager}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Email</Label>
                <Input
                type="string"
                name="email"
                onChange={this.handleChange}
                value={this.state.newApartment.email}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Price</Label>
                <Input
                type="string"
                name="price"
                onChange={this.handleChange}
                value={this.state.newApartment.price}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Bedrooms</Label>
                <Input
                type="integer"
                name="bedrooms"
                onChange={this.handleChange}
                value={this.state.newApartment.bedrooms}
                />
            </FormGroup>

            <FormGroup>
                <Label for="name">Bathrooms</Label>
                <Input
                type="integer"
                name="bathrooms"
                onChange={this.handleChange}
                value={this.state.newApartment.bathrooms}
                />
            </FormGroup>

            
            <Button
             onClick={this.handleSubmit} name="submit"
            >
                Add your apartment
            </Button>

        </Form>
        {this.state.submitted && <Redirect to="/apartmentindex" />}
      </>
    )
  }
}

export default ApartmentNew