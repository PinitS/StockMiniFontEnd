import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import inputValidate from "src/static/InputValidate";
import { PRODUCT_UPDATE_DATA_API_REQ } from "src/sagaType/product";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";

export default function EditForm(props) {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const dataAll = useSelector(({ setProduct }) => setProduct.data);
  const dataDropdown = useSelector(({ setDropdown }) => setDropdown.data);

  const [optionsCategory, setOptionsCategory] = React.useState([]);
  const [optionsTypes, setOptionsTypes] = React.useState([]);

  //--end redux && redux-saga
  const findObject = (id) => dataAll.filter((item) => item.id === id)[0];
  //find in object
  const data = findObject(props.id);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: data,
  });

  const onSubmit = (inputData, e) => {
    console.log("inputData", inputData);
    typeof inputData.img_path[0] === "undefined"
      ? delete inputData["img_path"]
      : (inputData.img_path = inputData.img_path[0]);
    action(PRODUCT_UPDATE_DATA_API_REQ, {
      input: inputData,
      path: "Product/",
      subPath: "update",
    });

    e.target.reset();
    action(IS_OPEN_MODAL_REQ, {
      isModal: false,
      component: null,
      modalHeader: null,
    });
  };

  const getDDCategories = (e) => {
    var DDProductCategory = dataDropdown.DDProductCategory.filter(
      (DDProductCategory) => {
        return DDProductCategory.store_id == e.target.value;
      }
    );
    setOptionsCategory(DDProductCategory);
  };

  const getDDTypes = (e) => {
    var DDProductType = dataDropdown.DDProductType.filter((DDProductType) => {
      return DDProductType.category_id == e.target.value;
    });
    setOptionsTypes(DDProductType);
  };

  React.useEffect(() => {
    var categories = dataDropdown.DDProductCategory.filter(
      (DDProductCategory) => {
        return DDProductCategory.store_id == data.store_id;
      }
    );
    setOptionsCategory(categories);
    var types = dataDropdown.DDProductType.filter((DDProductType) => {
      return DDProductType.category_id == data.category_id;
    });
    setOptionsTypes(types);
  }, []);

  return (
    <div>
      <CForm onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="store_id">Store</CLabel>
          </CCol>
          <CInput innerRef={register} type="hidden" name="id" />
          <CInput innerRef={register} type="hidden" name="active"/>

          <CCol xs="12" md="9">
            <CSelect
              custom
              name="store_id"
              id="store_id"
              innerRef={register(inputValidate.dropDown)}
              onChange={getDDCategories}
            >
              <option value="">Please Selected</option>
              {Object.entries(dataDropdown.DDStore).map(([key, value]) => {
                return (
                  <option key={key} value={key}>
                    {value}
                  </option>
                );
              })}
            </CSelect>
            <CFormText className="help-block">
              {errors.store_id && (
                <span className="text-danger">{errors.store_id.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>
        {optionsCategory != "" && (
          <div>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="category_id">Category</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect
                  custom
                  name="category_id"
                  id="category_id"
                  innerRef={register(inputValidate.dropDown)}
                  onChange={getDDTypes}
                >
                  {optionsCategory.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </CSelect>

                <CFormText className="help-block">
                  {errors.category_id && (
                    <span className="text-danger">
                      {errors.category_id.message}
                    </span>
                  )}
                </CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="type_id">Type</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect
                  custom
                  name="type_id"
                  id="type_id"
                  innerRef={register(inputValidate.dropDown)}
                >
                  {optionsTypes.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </CSelect>
                <CFormText className="help-block">
                  {errors.type_id && (
                    <span className="text-danger">
                      {errors.type_id.message}
                    </span>
                  )}
                </CFormText>
              </CCol>
            </CFormGroup>
          </div>
        )}
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="name">Name</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.name)}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name..."
            />
            <CFormText className="help-block">
              {errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="price">Price</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.price)}
              type="number"
              id="price"
              name="price"
              placeholder="Enter Price..."
            />
            <CFormText className="help-block">
              {errors.price && (
                <span className="text-danger">{errors.price.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="recommended_type">Recommended</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CSelect
              custom
              name="recommended_type"
              id="recommended_type"
              innerRef={register}
            >
              {dataDropdown.DDRecommended_type.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </CSelect>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="sku">Sku</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register}
              type="text"
              id="sku"
              name="sku"
              placeholder="Enter Sku..."
            />
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="detail">Detail</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.detail)}
              type="text"
              id="detail"
              name="detail"
              placeholder="Enter detail..."
            />
            <CFormText className="help-block">
              {errors.detail && (
                <span className="text-danger">{errors.detail.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="img_path">img</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register}
              type="file"
              id="img_path"
              name="img_path"
              placeholder="Enter detail..."
            />
          </CCol>
        </CFormGroup>

        <CButton type="reset" size="sm" color="danger">
          <CIcon name="cil-ban" /> Reset
        </CButton>
        <CButton
          type="submit"
          size="sm"
          className="float-right"
          color="primary"
        >
          <CIcon name="cil-scrubber" /> Submit
        </CButton>
      </CForm>
    </div>
  );
}
