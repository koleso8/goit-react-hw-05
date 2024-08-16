import { Field, Formik, Form } from 'formik';

const Movies = () => {
  const handleSubmit = (res, options) => {
    console.log(res);

    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" placeholder="enter movies ..." name="search" />
        </Form>
      </Formik>
    </div>
  );
};

export default Movies;
