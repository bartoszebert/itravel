import { TTripStatus } from "@/types/TTripStatus";
import { getDaysUntilStart } from "@/utils/getDaysUntilStart";
import React from "react";
import { Text } from "react-native";

interface Props {
  startDate: string;
  status: TTripStatus;
}

const TripStart = ({ startDate, status }: Props) => {
  const days = getDaysUntilStart(startDate);

  const renderMessage = () => {
    if (status === "ongoing") return "Trip is ongoing";
    if (status === "ended") return "Trip has ended";
    if (days === 0) return "Trip starts today";
    if (days < 0) return "Activate trip";
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
