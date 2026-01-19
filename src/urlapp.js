const ROUTES = {
  Media: {
    urlLocal: "./assets/images/",
    urlRemote: "/local/templates/beerresource/assets/images/",
  },

  login: {
    requests: {
      sendPhone: {
        // локальный JSON для MSW
        urlLocal: "/mocks/data/sendPhone.json",
        urlRemote: "/local/ajax/regauth.php",
      },
      sendCode: {
        urlLocal: "/mocks/data/sendCode.json",
        urlRemote: "/local/ajax/regauth.php",
      },
      sendRegistration: {
        urlLocal: "/mocks/data/sendRegistration.json",
        urlRemote: "/local/ajax/regauth.php",
      },
    },
  },

  addresses: {
    requests: {
      getAddresses: {
        urlLocal: "/mocks/data/getAddresses.json",
        urlRemote: "/local/ajax/delivery_addresses.php",
      },
      updateAddresses: {
        urlLocal: "/mocks/data/updateAddresses.json",
        urlRemote: "/local/ajax/delivery_addresses.php",
      },
    },
  },

  organizations: {
    requests: {
      getOrganizations: {
        urlLocal: "/mocks/data/getOrganizations.json",
        urlRemote: "/local/ajax/organizations.php",
      },
      updateOrganizations: {
        urlLocal: "/mocks/data/updateOrganizations.json",
        urlRemote: "/local/ajax/organizations.php",
      },
      deleteOrganizations: {
        urlLocal: "/mocks/data/deleteOrganizations.json",
        urlRemote: "/local/ajax/organizations.php",
      },
    },
  },

  profile: {
    requests: {
      getProfile: {
        urlLocal: "/mocks/data/getProfile.json",
        urlRemote: "/local/ajax/personal_data.php",
      },
    },
  },

  ACTIONS: {
    smsAction: () => {
      alert("smsAction is not implemented! (see urlapp.js)");
    },
  },

  LINKS: {
    addOrganization: "/personal/addorganization/",
  },
};

window.routes5 = ROUTES;
