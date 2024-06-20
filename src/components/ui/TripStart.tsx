import { getDaysUntilStart } from "@/utils/getDaysUntilStart";
import React from "react";
import { Text } from "react-native";

interface Props {
  startDate: string;
}

const TripStart = ({ startDate }: Props) => {
  const days = getDaysUntilStart(startDate);

  const renderMessage = () => {
    if (days === 0) return "Starts today";
    if (days < 0) return "Trip has already started";
    return (
      <>
        <Text className="font-psemibold">Starts in </Text>
        {days > 1 ? `${days} days` : `${days} day`}
      </>
    );
  };

  return (
    <Text className="text-primary-100 text-sm font-psemibold">
      {renderMessage()}
    </Text>
  );
};

export default TripStart;
