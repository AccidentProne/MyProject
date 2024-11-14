import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  taskText: {
    marginTop: 65,
    fontSize: 18,
    fontWeight: "bold",
  },

  goButton: {
    marginTop: 10,
    marginLeft: -120,
    backgroundColor: "#008000",
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 45,
  },

  noGoButton: {
    marginTop: -45,
    marginLeft: 140,
    backgroundColor: "#FF0000",
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    
  },
});

export default styles;
