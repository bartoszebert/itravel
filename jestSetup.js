import jest from "jest";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock("react-native-gesture-handler", () => {
  const { GestureHandlerRootView } = jest.requireActual(
    "react-native-gesture-handler"
  );
  return {
    GestureHandlerRootView,
    Swipeable: jest.fn().mockImplementation(({ children }) => children),
  };
});
