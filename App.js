import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./src/screens/DetailsScreen";
import Colors from "./src/constants/Colors";
import { Provider } from "react-redux";
import { store } from "./src/store";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TapNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.LightGreen },
            headerTintColor: "white",
            contentStyle: { backgroundColor: Colors.WHITE },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={TapNavigator}
            options={{
              title: "Meals",
            }}
          />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
