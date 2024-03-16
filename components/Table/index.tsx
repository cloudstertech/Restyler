import { View } from "react-native";




const Row = ({ children }) => (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        gap: 10,
        marginBottom: 20
      }}>
      {children}
    </View>
  );
  
  const Cell = ({ children }) => (
    <View
      style={{
        flex: 1,
        alignContent: "center"
      }}>
      {children}
    </View>
  );


  export default {
    Row, Cell
  }