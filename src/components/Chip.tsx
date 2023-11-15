import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";
import { RecipeCategory } from "../constants/RecipeCategory";

interface ChipProps {
  label: RecipeCategory;
  onPress?: (category: RecipeCategory) => void;
  isSelected: boolean;
}
const Chip: React.FC<ChipProps> = ({ label, onPress, isSelected }) => {
  const [isPressed, setIsPressed] = useState(isSelected);

  const handlePress = () => {
    if (onPress) {
      onPress(label);
    }
    setIsPressed(true);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        // isPressed
        //   ? { backgroundColor: Colors.LIGHT_GRAY }
        //   : { backgroundColor: Colors.LightGreen },
      ]}
    >
      <View style={style.chipContainer}>
        <Text style={style.chipText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  chipContainer: {
    backgroundColor: Colors.LightGreen,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
    margin: 4,
  },
  chipText: {
    color: "black",
  },
});

export default Chip;
/*
React.FC is a type alias provided by the @types/react package that stands
 for "React Function Component." It is used to define the type of a functional component in React. React.FC

 here is the other way of defining props 
 MyComponent({ name }: MyComponentProps) 

 TouchableOpacity is used to make the chip component interactive. TouchableOpacity
 touchable effect when the user presses it. It's often used for elements that should respond to touch events, such as buttons, chips, or links.
*/
