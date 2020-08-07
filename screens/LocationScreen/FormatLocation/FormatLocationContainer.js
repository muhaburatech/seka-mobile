import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormatLocationPresenter from './FormatLocationPresenter';
import { addLocation } from '../../../redux/actions/location/actions';
import Modal from '../../../components/Modal';

class FormatLocation extends Component {
  state = {
    id: '',
    location_name: '',
    district: '',
    street: '',
    phone_number: '',
    house_number: '',
    modalVisible: false,
  };

  componentDidMount() {
    this.setState({
      id: this.props.region.id,
      location_name: this.props.region.main_text,
      district: this.props.region.district,
      street: this.props.region.street,
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
    this.props.navigation.navigate('Location');
    this.setState({ modalVisible: true });
  };

  toggleModal = () => {
    this.setState({
      modalVisible: false,
    });
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

    if (this.state.modalVisible) {
      return (
        <Modal
          isVisible={this.state.modalVisible}
          handleCloseModel={this.toggleModal}
          content="Successfully registered this location"
        />
      );
    }
    return (
      <View>
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
      </View>
    );
  }
}

const WrappFormatLocation = ({
  region,
  phone_number,
  house_number,
  dispatch,
}) => {
  const navigation = useNavigation();
  return (
    <FormatLocation
      region={region}
      phone_number={phone_number}
      house_number={house_number}
      navigation={navigation}
      dispatch={dispatch}
    />
  );
};

export default connect()(WrappFormatLocation);
