import { Tabs } from "expo-router";
import { HomeIcon, AboutIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: { height: "100%" },
        tabBarStyle: {
          backgroundColor: "#152028",
          borderRadius: 8,
          position: "absolute", // Asegura que no haya fondo detrás
          bottom: 0, // Opcional: separa el tabBar de los bordes
        },
        tabBarActiveTintColor: "#B8B42D",
        tabBarInactiveTintColor: "#558c8c",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <AboutIcon size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
