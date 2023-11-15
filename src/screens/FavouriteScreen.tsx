import { useTypedSelector } from "../store";
import { Recipe, recipeData } from "../data/dummy_data";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import GirdItem from "../components/GridItem";

interface FavouriteScreenProps {
  navigation: any;
}

const FavouriteScreen: React.FC<FavouriteScreenProps> = ({ navigation }) => {
  const ids = useTypedSelector((state) => state.favorite.ids);
  // const recipe = recipeData.find((item) => item.id === recipeId);
  const recipes = recipeData.filter((recipe) =>
    ids.find((id) => id === recipe.id)
  );

  const renderRecipeItem = ({ item }: { item: Recipe }) => {
    function pressHandler() {
      navigation.navigate("DetailsScreen", {
        recipeId: item.id,
      });
    }

    const recipeItemProps = {
      title: item.title,
      preprationTime: item.preparationTime,
      imageSource: item.imageSource,
    };
    return <GirdItem {...recipeItemProps} onPress={pressHandler} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {recipes.length == 0 && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Image
            source={require("../../assets/empty-data.png")}
            style={{
              width: 90,
              height: 90,
              resizeMode: "contain",
              alignContent: "center",
              justifyContent:"center"
            }}
          />

          <Text
            style={{
              color: Colors.LightGreen,
              textAlign: "center",
              alignContent: "center",
              justifyContent:"center",
              margin:10
            }}
          >
            You do not have any recipes
          </Text>
        </View>
      )}
      {recipes.length > 0 && (
          <View style={styles.content}>
            <FlatList
              style={styles.catagoryContainer}
              data={recipes}
              keyExtractor={(item) => item.id}
              renderItem={renderRecipeItem}
              numColumns={2}
            />
          </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  catagoryContainer: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
export default FavouriteScreen;
