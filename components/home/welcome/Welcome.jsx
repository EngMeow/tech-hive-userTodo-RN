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


const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View >
      <View style={styles.container}>
        <Image source={icons.companyLogo} 
                resizeMode='cover'/>

        <Text style={styles.userName}>Tech Hive Co.</Text>
        <Text style={styles.welcomeMessage}>Let's Rock the code</Text>
      </View>

      

      <View style={styles.tabsContainer}>
        
            <TouchableOpacity style={styles.tab(activeJobType, )}>
              <Link style={styles.tabText(activeJobType )} href='Login'>login</Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab(activeJobType, )}>
              <Link style={styles.tabText(activeJobType )} href="Register">join our family</Link>
            </TouchableOpacity>
          
      </View>
    </View>
  );
};

export default Welcome;
