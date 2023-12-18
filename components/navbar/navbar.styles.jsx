import React, { Component } from "react";
import { StyleSheet } from "react-native";

const styledNavbar = StyleSheet.create({
  StyledNavbar: {
    position: "absolute",
    top: 30,
    left: 10,
    backgroundColor: "#938f8f89",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 280,
    height: 30,
    flex: 1,
  },
});

const styledDropdown = StyleSheet.create({
  Dropdown: {
    width: 280,
    top: 70,
    left: 10,
    backgroundColor: "#938f8f89",
    position: "absolute",
    borderRadius: 10,
    flex: 1,
    padding: 20,
    margin: 0,
  },
  DrowndownMenu: {
    textDecorationLine: "underline",
    textDecorationColor: "red",
  },
});
const Iconstyles = StyleSheet.create({
  StyledIcon: {
    position: "absolute",
    top: 30,
    right: 10,
  },
});

export { styledNavbar, Iconstyles, styledDropdown };
