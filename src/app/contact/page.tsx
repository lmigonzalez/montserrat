'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { contactSchema } from '../../validation/validation';
import Spinner from '@/components/Spinner';


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      note: '',
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  function onSubmit(values: object, action: any) {
    setLoading(true);
    axios
      .post('/api/hello', values)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    action.resetForm();
  }

  return (
    <main className="px-4 pt-40">
      <div className=" m-auto mb-14 w-fit">
        <h2 className="text-3xl font-medium md:text-6xl">Contáctame</h2>
        <div className="ml-auto h-1 w-1/2 rounded-full bg-my_blue md:h-2"></div>
      </div>

      <div className="">
        <h3 className="my-8 text-center text-xl font-medium text-my_yellow md:text-3xl">
          ¡Contáctame y comencemos tu camino hacia la educación!
        </h3>
        <p className="text-center text-4xl text-my_yellow">(477) 113 -7907</p>
        <div className="m-auto flex w-full max-w-[700px] flex-col border-opacity-50">
          <div className="divider">OR</div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="m-auto mb-24 w-[700px] max-w-full rounded-md border-[2px] border-my_blue px-4 py-8 text-my_light_black"
      >
        <label htmlFor="" className="after:text-[#EB4747] after:content-['*']">
          Nombre Completo:
        </label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mb-4 h-8 w-full rounded border-[1px] border-my_blue bg-white px-2"
        />
        {touched.fullName && errors.fullName ? (
          <p className="mb-6 font-extralight text-red-500">{errors.fullName}</p>
        ) : (
          <p></p>
        )}

        <label htmlFor="" className="after:text-[#EB4747] after:content-['*']">
          Correo electrónico:
        </label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mb-4 h-8 w-full rounded border-[1px] border-my_blue bg-white px-2"
        />

        {touched.email && errors.email ? (
          <p className="mb-6 font-extralight text-red-500">{errors.email}</p>
        ) : (
          <p></p>
        )}

        <label htmlFor="">Teléfono (no obligatorio):</label>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mb-6 h-8 w-full rounded border-[1px] border-my_blue bg-white px-2"
        />

        {touched.phone && errors.phone ? (
          <p className="mb-6 font-extralight text-red-500">{errors.phone}</p>
        ) : (
          <p></p>
        )}

        <label htmlFor="" className="after:text-[#EB4747] after:content-['*']">
          Mensaje:{' '}
        </label>
        <textarea
          name="note"
          value={values.note}
          onChange={handleChange}
          onBlur={handleBlur}
          className="min-h-16 mb-6 w-full rounded border-[1px] border-my_blue bg-white px-2"
        />

        {touched.note && errors.note ? (
          <p className="mb-6 font-extralight text-red-500">{errors.note}</p>
        ) : (
          <p></p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex h-8 w-1/2 items-center justify-center rounded bg-my_blue text-white"
          >
            {loading ? <Spinner /> : 'Enviar'}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
