import React from 'react';
import ReactDOM from 'react-dom/client';
import item_schema from './schema/item_schema.json';
import { withTheme } from '@rjsf/core';
import { Theme as ChakraUITheme } from "@rjsf/chakra-ui";
import validator from '@rjsf/validator-ajv8';
import {Box, Center} from '@chakra-ui/react';
import { JSONSchema7 } from "json-schema"
import { ChakraProvider, Flex, Heading, HStack, Button } from "@chakra-ui/react"
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom"


import { RJSFSchema } from '@rjsf/utils';


const Form = withTheme(ChakraUITheme);


const uiSchema = {
  "name": {
    "ui:autofocus": true,
    "ui:widget": "data-url",
  },
  "state": {
    "ui:widget": "radio"
  }
};


const App = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({name: "new", state: ""});
  return (
    <Flex h="100vh" direction="column">
      <Center>
        <Box px={16} py={8} maxW="1024px">
          <Form
            schema={item_schema as RJSFSchema}
            uiSchema={uiSchema}
            disabled={isSubmitting}
            formData={formData}
            onChange={({ formData }) => setFormData(formData)}
            onSubmit={(e) => console.log(e.formData)}
            validator={validator}
          >
          </Form>
        </Box>
      </Center>
      <Outlet />
    </Flex>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);


root.render(
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </ChakraProvider>
);



