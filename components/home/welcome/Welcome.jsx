import { useState } from 'react';
import { Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, Images, SIZES } from '../../../constants'

const jobTypes = ["Full-Time", "Part-time", "Freelancer"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActivejobType] = useState('Full-time')
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Arjun</Text>
        <Text style={styles.welcomeMessage}>Find a perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}      
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActivejobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome;