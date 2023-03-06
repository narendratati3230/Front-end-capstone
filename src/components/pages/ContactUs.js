import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack
} from '@chakra-ui/react';
import * as Yup from 'yup';
import useSubmit from '../hooks/useSubmit';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../Header';
/**
 * Covers a complete form implementation using formik and yup for validation
 */
// eslint-disable-next-line no-unused-vars
function ContactUs(props) {
  const { isLoading, response, submit } = useSubmit();
  const [onOpen, setOnOpen] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'support',
      comment: ''
    },
    onSubmit: (values) => {
      setOnOpen('Loading');
      submit('https://localhost:3000/contactus', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required')
    })
  });

  useEffect(() => {
    if (response) {
      setOnOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <>
      <header className="hero-section-container">
        <Header slogan={'San Diego'} noimage={true} />
      </header>
      <div
        className="container p-5"
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundColor: props.theme === 'dark' ? 'black' : 'white',
          // eslint-disable-next-line react/prop-types
          color: props.theme === 'dark' ? 'white' : 'black'
        }}>
        <ChakraProvider>
          <VStack w="1024px" alignItems="flex-start">
            <Heading as="h1" id="contactus">
              Contact Us
            </Heading>
            <Box p={6} rounded="md" w="100%">
              {onOpen}
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input id="firstName" name="firstName" {...formik.getFieldProps('firstName')} />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      {...formik.getFieldProps('email')}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                    <Select id="type" name="type" {...formik.getFieldProps('type')}>
                      <option value="support">General</option>
                      <option value="help">Need Help</option>
                      <option value="direction">Direction</option>
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Textarea
                      id="comment"
                      name="comment"
                      height={250}
                      {...formik.getFieldProps('comment')}
                    />
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </VStack>
        </ChakraProvider>
      </div>
    </>
  );
}

export default ContactUs;
