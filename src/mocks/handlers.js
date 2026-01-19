import { http, HttpResponse } from "msw";

// src/mocks/data/*.json
import sendPhoneData from "./data/sendPhone.json";
import sendCodeData from "./data/sendCode.json";
import sendRegistrationData from "./data/sendRegistration.json";

import getAddressesData from "./data/getAddresses.json";
import updateAddressesData from "./data/updateAddresses.json";

import getOrganizationsData from "./data/getOrganizations.json";
import updateOrganizationsData from "./data/updateOrganizations.json";
import deleteOrganizationsData from "./data/deleteOrganizations.json";

import getProfileData from "./data/getProfile.json";

export const handlers = [
  // LOGIN
  http.post("/login/sendPhone", () =>
    HttpResponse.json(sendPhoneData, { status: 200 })
  ),

  http.post("/login/sendCode", () =>
    HttpResponse.json(sendCodeData, { status: 200 })
  ),

  http.post("/login/sendRegistration", () =>
    HttpResponse.json(sendRegistrationData, { status: 200 })
  ),

  // ADDRESSES
  http.get("/addresses/getAddresses", () =>
    HttpResponse.json(getAddressesData, { status: 200 })
  ),

  http.post("/addresses/updateAddresses", () =>
    HttpResponse.json(updateAddressesData, { status: 200 })
  ),

  // ORGANIZATIONS
  http.get("/organizations/getOrganizations", () =>
    HttpResponse.json(getOrganizationsData, { status: 200 })
  ),

  http.post("/organizations/updateOrganizations", () =>
    HttpResponse.json(updateOrganizationsData, { status: 200 })
  ),

  http.post("/organizations/deleteOrganizations", () =>
    HttpResponse.json(deleteOrganizationsData, { status: 200 })
  ),

  // PROFILE
  http.get("/mocks/data/getProfile.json", () =>
    HttpResponse.json(getProfileData, { status: 200 })
  ),

  http.put("/mocks/data/getProfile.json", (req) => {
    const updatedData = req.body; // Данные, которые пришли в PUT
    console.log("PUT /mocks/data/getProfile.json", updatedData);

    // Если нужно обновить моковый объект в памяти.
    Object.assign(getProfileData, updatedData);

    return HttpResponse.json({ status: "success", profile: getProfileData }, { status: 200 });
  }),
];
