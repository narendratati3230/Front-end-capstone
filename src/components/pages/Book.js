import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
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
function Book(props) {
  const { isLoading, response, submit } = useSubmit();
  const [onOpen, setOnOpen] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comment: ''
    },
    onSubmit: (values) => {
      setOnOpen('Loading');
      submit('https://localhost:3000/Book', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      phone: Yup.number()
        .min(999999999, 'Must a valid number')
        .max(9999999999, 'Must a valid number')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required')
    })
  });

  useEffect(() => {
    if (response) {
      setOnOpen(response.type, response.message);
      if (response.type === 'success') {
        setOnOpen('Reservation Confirmed');
        formik.resetForm();
      } else {
        setOnOpen("Something wrong, Reservation didn't go through, please try again");
      }
    }
  }, [response]);

  return (
    <>
      <header className="hero-section-container">
        <Header slogan={'San Diego'} noimage={true} />
      </header>
      <div
        className="container p-4"
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundColor: props.theme === 'dark' ? 'black' : 'white',
          // eslint-disable-next-line react/prop-types
          color: props.theme === 'dark' ? 'white' : 'black'
        }}>
        <ChakraProvider>
          <VStack w="1024px" alignItems="flex-start">
            <Heading as="h1" id="Book">
              Reserve a Table
            </Heading>
            <Box p={6} rounded="md" w="100%">
              {onOpen !== '' && <Alert>{onOpen}</Alert>}
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input id="firstName" name="firstName" {...formik.getFieldProps('firstName')} />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.lastName && formik.touched.lastName}>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input id="lastName" name="lastName" {...formik.getFieldProps('lastName')} />
                    <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
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
                  <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone}>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <Input
                      type={'number'}
                      id="phone"
                      name="phone"
                      min="999999999"
                      max="9999999999"
                      {...formik.getFieldProps('phone')}
                    />
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
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
                  <Button type="submit" width="full" isLoading={isLoading}>
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

export default Book;
