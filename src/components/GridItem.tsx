import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
  Image,
} from "react-native";
import Colors from "../constants/Colors";

interface GirdItemProps {
  title: string;
  preprationTime: number;
  imageSource: any;
  onPress?: () => void;
}
const GirdItem: React.FC<GirdItemProps> = ({
  title,
  preprationTime,
  imageSource,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.preprationTime}>{`${preprationTime} mins`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 170,
    height: 170,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 10,
    overflow: "hidden",
    marginStart: 10,
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: "100%", // Adjust the percentage as needed
  },
  dataContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginStart: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginEnd: 10,
  },
  preprationTime: {
    fontSize: 16,
    color: "gray",
    opacity: 0.5,
  },
});
export default GirdItem;
