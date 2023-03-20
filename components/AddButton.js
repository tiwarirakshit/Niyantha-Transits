import { Text, TouchableOpacity } from 'react-native';

const AddButton = ({ text }) => {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        height: 40,
        width: '30%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: 'Poppins'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
