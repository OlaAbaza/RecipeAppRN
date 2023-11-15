import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";
import { RecipeCategory } from "../constants/RecipeCategory";
describe("HomeScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(<HomeScreen navigation={{}} />);

    // Add assertions based on your component's rendering
    expect(getByText("Discover Recipe")).toBeTruthy();
    expect(getByText("New Posted Recipe everyday")).toBeTruthy();
  });

  it("handles category selection correctly", () => {
    const { getByText, getAllByTestId } = render(
      <HomeScreen navigation={{}} />
    );

    // Assuming there is a category named 'Appetizer'
    fireEvent.press(getByText("Appetizer"));

    // Assertions based on your expected behavior after selecting a category
    // For example, check that the recipes have been updated accordingly
    const appetizerRecipes = getAllByTestId("recipe-item");
    expect(appetizerRecipes.length).toBeGreaterThan(0);
  });

  it("navigates to details screen on recipe item press", () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <HomeScreen navigation={{ navigate: mockNavigate }} />
    );

    // Assuming there is a recipe named 'Delicious Recipe'
    fireEvent.press(getByText(RecipeCategory.APPETIZER));

    // Assertions based on your expected behavior when a recipe item is pressed
    // For example, check that the navigation function was called with the correct parameters
    expect(mockNavigate).toHaveBeenCalledWith("DetailsScreen", {
      recipeId: "1",
    });
  });
});
