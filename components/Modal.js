import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { Text, View } from 'react-native';
import SmallButton from './SmallButton';

function ModalView({ isVisible, content, handleCloseModel }) {
  return (
    <View style>
      <Modal isVisible={isVisible}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              paddingBottom: 15,
              fontWeight: '700',
            }}
          >
            {content}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SmallButton text="Close" accent onPress={handleCloseModel} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalView;
