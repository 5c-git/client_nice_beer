import React from 'react';
import ReactDOM from 'react-dom';
import AddOrganization from '../../../../components/Add-Organization/Add-Organization';

const addOrganization = document.querySelector('#add-organization');

if (addOrganization) {
  ReactDOM.render(<AddOrganization />, addOrganization);
}
