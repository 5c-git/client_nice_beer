import { http, HttpResponse } from "msw";
import {
  ENV,
} from '../env';

// src/mocks/data/*.json
import Feedback from "./data/Feedback.json";
import RequestContacts from "./data/RequestContacts.json";
import Subscribe from "./data/Subscribe.json";
import RequestService from "./data/RequestService.json";
import RequestCooperation from './data/RequestCooperation.json';
import RequestSearch from './data/RequestSearch.json';
import updateProfile from './data/updateProfile.json';

import getProfile from "./data/getProfile.json";

export const handlers = [
  // FORMS
  http.post(`${window.routes5.form.requests.Feedback[`url${ENV}`]}`, async ({ request }) => {
    const formData = await request.formData();

    // если надо — читаем поля
    const data = Object.fromEntries(formData.entries());
    console.log('Feedback POST:', data);

    return HttpResponse.json(Feedback, {
      status: 200,
    });
  }),

  http.post(`${window.routes5.form.requests.RequestContacts[`url${ENV}`]}`, async ({ request }) => {
    const formData = await request.formData();

    // если надо — читаем поля
    const data = Object.fromEntries(formData.entries());
    console.log('RequestContacts POST:', data);

    return HttpResponse.json(RequestContacts, {
      status: 200,
    });
  }),

  http.post(`${window.routes5.form.requests.Subscribe[`url${ENV}`]}`, async ({ request }) => {
    const formData = await request.formData();

    // если надо — читаем поля
    const data = Object.fromEntries(formData.entries());
    console.log('Subscribe POST:', data);

    return HttpResponse.json(Subscribe, {
      status: 200,
    });
  }),

  http.post(`${window.routes5.form.requests.RequestService[`url${ENV}`]}`, async ({ request }) => {
    const formData = await request.formData();

    // если надо — читаем поля
    const data = Object.fromEntries(formData.entries());
    console.log('RequestService POST:', data);

    return HttpResponse.json(RequestService, {
      status: 200,
    });
  }),

  http.post(`${window.routes5.form.requests.RequestCooperation[`url${ENV}`]}`, async ({ request }) => {
    const formData = await request.formData();

    // если надо — читаем поля
    const data = Object.fromEntries(formData.entries());
    console.log('RequestCooperation POST:', data);

    return HttpResponse.json(RequestCooperation, {
      status: 200,
    });
  }),

  http.post(`${window.routes5.form.requests.RequestSearch[`url${ENV}`]}`, async ({ request }) => {
    const formData = await request.formData();

    // если надо — читаем поля
    const data = Object.fromEntries(formData.entries());
    console.log('RequestSearch POST:', data);

    return HttpResponse.json(RequestSearch, {
      status: 200,
    });
  }),


  // Личный кабинет. 
  http.put(`${window.routes5.profile.requests.updateProfile[`url${ENV}`]}`, async ({ request }) => {
    const formData = await request.formData();

    // если надо — читаем поля
    const data = Object.fromEntries(formData.entries());
    console.log('updateProfile PUT:', data);

    return HttpResponse.json(updateProfile, {
      status: 200,
    });
  }),


  // Остатки от личных данных на Реакте. 
  // // PROFILE
  // http.get("/mocks/data/getProfile.json", () =>
  //   HttpResponse.json(getProfile, { status: 200 })
  // ),

  // // (Сейчас сделано череp axios и возможно поэтому через put а не post)
  // http.put("/mocks/data/getProfile.json", (req) => {
  //   const updatedData = req.body; // Данные, которые пришли в PUT
  //   console.log("getProfile PUT", updatedData);

  //   // Если нужно обновить моковый объект в памяти.
  //   Object.assign(getProfile, updatedData);

  //   return HttpResponse.json({ status: "success", profile: getProfile }, { status: 200 });
  // }),
];
