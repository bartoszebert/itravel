import { IUser } from "@/interfaces/IUser";
import { Image, Text, View } from "react-native";

interface Props {
  user: IUser | null;
}

const UserDetails = ({ user }: Props) => {
  if (!user) return null;

  return (
    <View className="items-center">
      <Image
        className="w-24 h-24 rounded-full mx-auto mb-5"
        source={{ uri: user.avatar }}
        resizeMode="contain"
      />
      <Text className="text-primary-100">
        Username: <Text className="font-psemibold">{user.username}</Text>
      </Text>
      <Text className="text-primary-100 mt-2">
        Firstname:{" "}
        <Text className="font-psemibold">{user.firstname || "-"}</Text>
      </Text>
      <Text className="text-primary-100 mt-2">
        Lastname: <Text className="font-psemibold">{user.lastname || "-"}</Text>
      </Text>
      <Text className="text-primary-100 mt-2">
        Email: <Text className="font-psemibold">{user.email}</Text>
      </Text>
    </View>
  );
};

export default UserDetails;
