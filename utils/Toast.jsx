import Toast from 'react-native-toast-message';

export const successToast = (message) => {
  Toast.show({
    type: 'success',
    text1: message,
    position: 'bottom',
    visibilityTime: 3000,
    autoHide: true,
  });
};

export const errorToast = (message) => {
  Toast.show({
    type: 'error',
    text1: message,
    position: 'bottom',
    visibilityTime: 3000,
    autoHide: true,
  });
};
