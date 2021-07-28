import React from 'react';
import styled from '@emotion/native';
import { Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const CustomContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const CustomImage = styled.Image`
  width: 70%;
  height: 60%;
`;

export default class DetailScreen extends React.Component {
  render() {
    const title = this.props.title || 'No Title';
    const photo = this.props.photo || 'No Photo';
    return (
      <CustomContainer>
        <CustomText>Title: {title}</CustomText>
        <CustomImage source={{uri: photo}} />
        <Button title="Back" onPress={() => Actions.pop()}></Button>
      </CustomContainer>
    );
  }
}