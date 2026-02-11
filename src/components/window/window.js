import {
  validateForm,
  maskPhone,
  maskInternationalPhone,
  initPasswordEye,
  initFileLoadInput,
} from '../validator/validator';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import findVideos from '../video/video';
import { summonAlert, removeAlert } from '../alert/alert';
import multiMapInit from '../find/find';
import initProfileSelect from '../profile-center/profile-center';
import initCitySelect from '../modal/modal';
import { summonPromotionAlert, removePromotionAlert } from '../promotion-alert/promotion-alert';
import { addLoading, removeLoading } from '../loading/loading';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  activateRequestButtons,
} from '../../utils/utils';
import selectCityInit from '../select-city/select-city';
import initBxSoaOrderSelect from '../bx-soa-order/bx-soa-order';
import callUsModalInit from '../call-us/call-us';
import activateCatalogAmountCard from '../catalog-amount-card/catalog-amount-card';
import activateItemCard from '../item-card/item-card';
import activateCartCard from '../cart-card/cart-card';
import activateModalProduct from '../modal-product/modal-product';
// import catalogAmountInit from '../catalog-amount/catalog-amount';
import filterInit from '../catalog/catalog';
import cornersFilterInit from '../corners-filter/corners-filter';

window.Corners5ProjectLayout = {
  setTextareaAutoHeight,
  summonPopUp,
  removePopUp,
  findVideos,
  summonAlert,
  removeAlert,
  multiMapInit,
  initProfileSelect,
  initCitySelect,
  validation: {
    validateForm,
    maskPhone,
    maskInternationalPhone,
    initPasswordEye,
    initFileLoadInput,
  },
  summonPromotionAlert,
  removePromotionAlert,
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  addLoading,
  removeLoading,
  selectCityInit,
  initBxSoaOrderSelect,
  callUsModalInit,
  activateCatalogAmountCard,
  activateItemCard,
  activateCartCard,
  activateModalProduct,
  filterInit,
  setStatus,
  activateRequestButtons,
  cornersFilterInit,
};
