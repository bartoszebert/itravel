import SwipeableDeleteButton from "@/components/ui/SwipeableDeleteButton";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface IProps {
  children: React.ReactNode;
  handleDelete: () => void;
  id: string;
}

const rowRefs = new Map<string, Swipeable>();

const SwipeableItem = ({ children, handleDelete, id }: IProps) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <SwipeableDeleteButton handleDelete={handleDelete} />
        )}
        ref={(ref) => {
          if (ref && !rowRefs.get(id)) {
            rowRefs.set(id, ref);
          }
        }}
        onSwipeableWillOpen={() => {
          [...rowRefs.entries()].forEach(([key, ref]) => {
            if (key !== id && ref) ref.close();
          });
        }}
      >
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SwipeableItem;
