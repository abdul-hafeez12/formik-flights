
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Form, Field, DisplayFormikState, Formik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  from: yup.string().required("Required"),
  to: yup.string().required("Required"),
  Departure: yup.string().required("Required"),
  return: yup.string().required("Required"),
  Adults: yup.number()
          .min(10, "Must be more than 10 ")
          .max(20, "Must be less than 10 ")
          .required("This field is requried"),
  childreen: yup.number()
          .min(10, "Must be more than 10 ")
          .max(20, "Must be less than 10 ")
          .required("This field is requried")
})

function App() {
  return (
    <Container >
      <div>
      <Formik initialValues={{from: '', to: '', Departure: '',return: '', Adults: 0, childreen: 0}} validationSchema={validationSchema} onSubmit={values => alert(JSON.stringify(values))}>
      {({ errors, touched }) => (
       <Form className="my-5 ml-5">
       <h3 className="text-center display-4">SEARCH FLIGTHS</h3>
       <Row className="my-3 g-2">
         <Col>
           <Field
             name="from"
             placeholder="From"
           />
           {errors.from && touched.from ? (
             <div class="alert alert-danger" role="alert">{errors.from}</div>
           ) : null}
         </Col>
         <Col>
           <Field
             name="to"
             placeholder="to"
           />
           {errors.to && touched.to ? (
             <div class="alert alert-danger" role="alert">{errors.to}</div>
           ) : null}
         </Col>
       </Row>
       <Row className="mb-3 row-cols-md-2 g-2">
         <Col>
           <Field
             name="Departure"
             placeholder="Departure"
           />
           {errors.Departure && touched.Departure ? (
             <div class="alert alert-danger" role="alert">{errors.Departure}</div>
           ) : null}
         </Col>
         <Col>
           <Field  name="return"  placeholder="return"/>
           {errors.return && touched.return ? (
             <div class="alert alert-danger" role="alert">{errors.return}</div>
           ) : null}
         </Col>
       </Row>
       <Row className="mb-3 row-cols-md-2 g-2">
         <Col>
         <Button className="mr-1">+</Button>
           <Field
             name="Adults"
             placeholder="Adults"
           />
           <Button className="ml-1">-</Button>
           {errors.Adults && touched.Adults ? (
             <div class="alert alert-danger" role="alert">{errors.Adults}</div>
           ) : null}
         </Col>
         <Col>
           <Button className="mr-1">+</Button>
           <Field  name="childreen"   placeholder="Childreen"/>
           <Button className="ml-1">-</Button>
           {errors.childreen && touched.childreen ? (
             <div class="alert alert-danger" role="alert">{errors.childreen}</div>
           ) : null}
         </Col>
       </Row>
       <Row className="ml-5">
        <Col>
        <div className="mt-3 d-flex flex-column">
         <Button variant="primary" type="submit">
           Create Order
         </Button>
       </div>
        </Col>
        <Col>
        </Col>
       </Row>
      
     </Form>
      )}
      </Formik>
      </div>
    </Container>
  );
}

export default App;
