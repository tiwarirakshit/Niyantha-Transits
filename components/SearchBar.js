import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Search = ({ text }) => {
  
  return (
    <View style={{ width: '65%', flexDirection: 'row' }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFEC89',
          height: 40,
          width: '40%',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontFamily: 'Poppins' }}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        style={{
          width: '65%',
          backgroundColor: 'white',
          height: 40,
          borderRadius: 10,
          marginLeft: '-5%',
          paddingHorizontal: '5%',
          fontFamily: 'Poppins'
        }}
        selectionColor={'black'}
      />
    </View>
  );
};

export default Search;
