import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FormatLocationPresenter from './FormatLocationPresenter';
import { addLocation } from '../../../redux/actions/location/actions';

class FormatLocation extends Component {
  state = {
    id: '',
    location_name: '',
    district: '',
    street: '',
    phone_number: '',
    house_number: '',
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      location_name: this.props.location_name,
      district: this.props.district,
      street: this.props.street,
    });
  }

  onInputChange = (text, name) => {
    this.setState({
      [name]: text,
    });
  };

  onRegisterLocation = () => {
    const { dispatch } = this.props;
    dispatch(addLocation(this.state));
    const navigation = useNavigation();
    navigation.navigate('Login');
  };

  render() {
    const {
      id,
      location_name,
      district,
      street,
      phone_number,
      house_number,
    } = this.state;
    return (
      <FormatLocationPresenter
        id={id}
        location_name={location_name}
        district={district}
        street={street}
        phone_number={phone_number}
        house_number={house_number}
        onInputChange={this.onInputChange}
        onRegisterLocation={this.onRegisterLocation}
      />
    );
  }
}

export default connect()(FormatLocation);
