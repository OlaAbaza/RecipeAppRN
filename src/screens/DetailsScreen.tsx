import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import Colors from "../constants/Colors";
import { recipeData } from "../data/dummy_data";
import {
  useTypedSelector,
  useAppDispatch,
  deleteFavorite,
  add,
} from "../store";

interface DetailsScreenProps {
  navigation: any;
  route: any;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const recipeId = route.params.recipeId;

  const recipe = recipeData.find((item) => item.id === recipeId);
  const dispatch = useAppDispatch();
  const ids = useTypedSelector((state) => state.favorite.ids);

  const [isImgLoading, setIsImgLoading] = useState(false);

  const [isFavoriteSelected, setIsFavoriteSelected] = useState(
    ids.find((id) => id === recipe?.id) != null
  );
  const [seeMore, setSeeMore] = useState(true);

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  const textButton = seeMore ? "See More" : "See Less";

  const handleFavoritePress = () => {
    setIsFavoriteSelected(!isFavoriteSelected);
    if (!isFavoriteSelected) {
      console.log("llo" + recipe?.id);

      dispatch(add({ ids: recipe?.id }));
    } else {
      console.log("ii" + recipe?.id);

      dispatch(deleteFavorite({ ids: recipe?.id }));
    }

    // Implement your favorite press logic here
  };

  const renderIngredientItem = ({
    item,
    index,
  }: {
    item: String;
    index: number;
  }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            style.circle,
            index % 2 === 0 ? style.circleEven : style.circleOdd,
          ]}
        ></View>
        <Text style={{ fontSize: 18, color: Colors.BLACK, paddingStart: 4 }}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../../assets/food.jpg")}
          style={{ width: "100%", aspectRatio: 1 }}
        >
          {isImgLoading && (
            <View
              style={{
                backgroundColor: "gray",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
          )}

          <TouchableOpacity
            onPress={handleFavoritePress}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Image
              source={
                isFavoriteSelected
                  ? require("../../assets/heart.png")
                  : require("../../assets/heart-outline.png")
              }
              style={{
                width: 35,
                height: 35,
                tintColor: isFavoriteSelected ? "lightgreen" : "gray",
              }}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View style={style.headerContainar}>
          <Text style={style.title} numberOfLines={3}>
            Pasta with Tomato Sauce
          </Text>
          <Text style={style.subTitle}>{`45 mins`}</Text>
        </View>

        <View style={style.container}>
          <View style={style.surface}>
            <Text numberOfLines={5}>{recipe?.summary}</Text>
            <TouchableOpacity onPress={toggleSeeMore}>
              <Text style={style.button}>{textButton}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.spacer}></View>
        </View>

        <View>
          <Text style={style.caption}>Ingredients</Text>
          <View style={style.spacer}></View>

          <FlatList
            style={{ padding: 4 }}
            data={recipe?.ingredients}
            renderItem={renderIngredientItem}
            keyExtractor={(item) => item}
          />

          <View style={style.spacer}></View>
        </View>
      </View>
    </ScrollView>
  );
};

// In React Native, you should apply the numberOfLines property directly to the Text component
const style = StyleSheet.create({
  headerContainar: {
    padding: 8,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: Colors.BLACK,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 8,
    flex: 2,
  },
  subTitle: {
    flex: 1,
    color: "rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    maxWidth: "33%", // To make sure it takes up 1/3 of the space
  },
  container: {
    paddingHorizontal: 16,
  },
  surface: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  button: {
    height: 40,
    width: "100%",
    paddingVertical: 8,
    textAlign: "center",
  },
  spacer: {
    height: 10,
  },
  caption: {
    color: Colors.LightGreen,
    fontSize: 20,
    paddingStart: 8,
    textAlign: "left",
    fontWeight: "bold",
  },
  circle: {
    width: 10, // circleSize
    height: 10, // circleSize
    borderRadius: 10, // circleSize / 2
    paddingStart: 8,
  },
  circleEven: {
    backgroundColor: Colors.LightGreen,
  },
  circleOdd: {
    backgroundColor: Colors.MintGreen,
  },
});

export default DetailsScreen;
