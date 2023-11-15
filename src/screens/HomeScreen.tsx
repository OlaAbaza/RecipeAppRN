import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Chip from "../components/Chip";
import GirdItem from "../components/GridItem";
import { Recipe, recipeData } from "../data/dummy_data";
import {
  RecipeCategory,
  getAllRecipeCategories,
} from "../constants/RecipeCategory";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(
    recipeData.filter((item) => item.category == RecipeCategory.APPETIZER)
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const renderCategoryItem = ({ item }: { item: RecipeCategory }) => {
    const isPressed = item == RecipeCategory.APPETIZER ? true : false;
    return (
      <Chip
        label={item}
        isSelected={isPressed}
        onPress={(category: RecipeCategory) => handleOnSelectCategory(category)}
      />
    );
  };

  const handleOnSelectCategory = (category: RecipeCategory) => {
    setRecipes(recipeData.filter((item) => item.category == category));
  };

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
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Discover Recipe</Text>
          <Text style={styles.subTitle}>New Posted Recipe everyday</Text>
        </View>
        <FlatList
          style={styles.catagoryContainer}
          data={getAllRecipeCategories()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
        />
        <FlatList
          style={styles.catagoryContainer}
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={renderRecipeItem}
          numColumns={2}
        />
      </View>
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
  headerContainer: {
    padding: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 30,
    color: Colors.BLACK,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 15,
    padding: 4,
    fontWeight: "normal",
    color: "rgba(0, 0, 0, 0.4)",
  },
});

export default HomeScreen;

// VirtualizedList components are optimized for rendering long lists efficiently, and they are not designed to be nested inside a standard ScrollView.
//If you do nest them, it can lead to issues with the scrolling behavior and windowing optimizations.
