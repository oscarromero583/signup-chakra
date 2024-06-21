import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Navigation from "./navigation";
import Form from "./form";
import Card from "./card";
import theme from "./theme";
import ThemeToggle from "./ThemeToggle";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: false,
        }}
      >
        <Navigation />
        <ThemeToggle />
        <Form />
        <Card />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
