import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link, useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";


const Welcome = () => {
  const router = useRouter();

  return (
    <View >
      <View style={styles.container}>
        <Image source={icons.companyLogo} 
                resizeMode='cover'/>

        <Text style={styles.userName}>Tech Hive Co.</Text>
        <Text style={styles.welcomeMessage}>Let's Rock the code</Text>
      </View>

      

      <View style={styles.tabsContainer}>
        
            <TouchableOpacity style={styles.tab}>
              <Link style={styles.tabText} href='Login'>login</Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
              <Link style={styles.tabText} href="Register">join our family</Link>
            </TouchableOpacity>
          
      </View>
    </View>
  );
};

export default Welcome;
