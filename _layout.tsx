import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        drawerLabel: "Index",
        title: "Menu",
      }}
    />
    <Drawer.Screen
      name="telaa"
      options={{
        drawerLabel: "Home",
        title: "Menu",
      }}
    />
     <Drawer.Screen
      name="telab"
      options={{
        drawerLabel: "Tela B",
        title: "Menu",
      }}
    />
    <Drawer.Screen
      name="telac"
      options={{
        drawerLabel: "Tela C",
        title: "Menu",
      }}
    />
  </Drawer>
  );
}
