import SwipeableDeleteButton from "@/components/ui/SwipeableDeleteButton";
import { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface Props {
  children: ReactNode;
  handleDelete: () => void;
  id: string;
}

const SwipeableItem = ({ children, handleDelete, id }: Props) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <SwipeableDeleteButton handleDelete={handleDelete} />
        )}
        testID="swipeable-item"
      >
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SwipeableItem;
