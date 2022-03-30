import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import houses from '../../consts/houses';
import colors from '../../../src/consts/colors';


const HomeScreen = ({navigation}) => {
 
  const categoryList = ['All'];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (

         
      <View style={style.categoryListContainer}>
        
        {categoryList.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  

  const Card = ({house}) => {
    return (
      
     
        <View style={style.card}>
          {/* House image */}
          <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', house)}>
          <Image source={house.image} style={style.cardImage} />
          </TouchableOpacity>
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Rome Suites
              </Text>
              <Text
                style={{fontWeight: 'bold', color: colors.purple, fontSize: 16}}>
                R3,500
              </Text>
            </View>

            {/* Location text */}

            <Text style={{color: colors.grey, fontSize: 14, marginTop: 5}}>
              Polokwane Central
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
          
        </View>
        
      
     
      
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={style.header}>

       
        <View>
          <Text style={{color: colors.grey}}>Find exclusive deals, and much more...</Text>
        </View>

        <Image
          style={style.profileImage}
          source={require('../../assets/person.jpg')}
        />
        <Text style={{color: colors.black, fontSize: 10, fontWeight: 'bold'}}>
            Elizabeth
          </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 100,
            paddingVertical: 0,
            paddingLeft: 20,
            
          }}>
          <View style={style.searchInputContainer}>
          
            <TextInput placeholder=" Where are you going?  " />
            <Icon name="search" color={colors.grey} size={25} />
            <Icon name="navigate" size={25}/>
            
          </View>
          

          <View style={style.sortBtn}>
            <Icon name="tune" color={colors.white} size={25} />
          </View>

          <View style={style.sortBtn}>
            <Icon name="tune" color={colors.white} size={25} />
          </View>
          
        </View>

        

        {/* Render categories */}
        <ListCategories />

        {/* Render Card */}
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: colors.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: colors.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 500,
  
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: colors.grey,
  },
  activeCategoryListText: {
    color: colors.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: colors.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: colors.grey},
});
export default HomeScreen;