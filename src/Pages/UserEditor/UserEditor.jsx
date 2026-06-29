import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import Select, { components } from "react-select";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
const UserEditor = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      role: "",
      property: [],
      tenant: [{}],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const roleOptions = [
    {
      label: "Admin",
      value: 1,
    },
    {
      label: "Property Owner",
      value: 2,
    },
    {
      label: "Tenant",
      value: 3,
    },
  ];
  const propertyOptions = [
    {
      label: "Berlin - Mahlsdorfer Märkte",
      value: "p_101",
    },
    {
      label: "Cloppenburg, Max-Planck-Straße 14",
      value: "p_102",
    },
    {
      label: "Freyburg, Kirschweg 3",
      value: "p_103",
    },
    {
      label: "Hohen Neuendorf",
      value: "p_104",
    },
    {
      label: "Höhr-Grenzhausen",
      value: "p_105",
    },
  ];
  const conatctFields = [
    {
      type: "text",
      label: "Name",
      key: "name",
    },
    {
      type: "email",
      label: "Email",
      key: "email",
    },
    {
      type: "text",
      label: "Phone Number",
      key: "phoneNumber",
    },
  ];

  const tenantOptions = [
    {
      value: "1001",
      label: "EDEKA-MIHA Immobilien-Service GmbH",
      pid: "p_101",
    },
    {
      value: "1002",
      label: "Müller Handels GmbH",
      pid: "p_103",
    },
  ];
  const checkBoxOptions = (props) => (
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => null} />
      {props.label}
    </components.Option>
  );
  // console.log(formik.values.property, "property");
  // (useEffect(() => {
  //   if (formik.values.role !== 2) {
  //     formik.setFieldValue("property", []);
  //   }
  // }),
  //   [formik.values.role]);
  useEffect(() => {
    if (formik.values.role !== 2) {
      formik.setFieldValue("property", []);
    }
  }, [formik.values.role]);

  const handleClick = () => {
    formik.setFieldValue("tenant", [...formik.values.tenant, {}]);
  };
  //   const handlePropertryChange = (selected, id) => {
  // formik.values.
  //     formik.setFieldValue()
  //   };
  const handleTenantchange = (selected, id) => {
    formik.values.tenant[id].tenant = selected;
    // console.log(formik.values.tenant, "dddddddd");
    formik.setFieldValue("tenant", [...formik.values.tenant]);
  };
  const handleDelete = (id) => {
    const updated = formik.values.tenant.filter((item, index) => index != id);
    formik.setFieldValue("tenant", updated);
  };
  // console.log(formik.values.tenant, "rrrr");
  return (
    <div>
      <BreadCrumbs />
      <span>Contact Details</span>
      <br></br>
      {conatctFields.map((obj, id) => (
        <div key={id}>
          <label htmlFor={obj.key}>{obj.label}</label>
          <input
            type={obj.type}
            value={formik.values[obj.key]}
            onChange={formik.handleChange}
            name={obj.key}
            id={obj.key}
            onBlur={formik.handleBlur}
          />
        </div>
      ))}
      <span>Work Details</span>
      <br></br>
      <label>Role</label>
      <Select
        options={roleOptions}
        value={formik.values.role}
        onChange={(selected) => formik.setFieldValue("role", selected)}
        components={{ IndicatorSeparator: () => null }}
        onBlur={() => formik.setTouched("role", true)}
      />
      {formik.values.role.value === 2 && (
        <>
          <label>Property</label>
          <Select
            components={{ Option: checkBoxOptions }}
            options={propertyOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            value={formik.values.property}
            onChange={(selected) => formik.setFieldValue("property", selected)}
            onBlur={() => formik.setTouched("property", true)}
          />
        </>
      )}

      {formik.values.role.value === 3 && (
        <>
          {" "}
          {formik.values.tenant.map((item, id) => (
            <div key={id}>
              <Select
                options={propertyOptions}
                // onChange={(selected) => handlePropertryChange(selected, id)}
                components={{ IndicatorSeparator: () => null }}
              />
              <Select
                options={tenantOptions}
                onChange={(selected) => handleTenantchange(selected, id)}
                components={{ IndicatorSeparator: () => null }}
                value={formik.values.tenant[id].tenant}
              />
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          ))}
          <button onClick={handleClick}>Add Property</button>
        </>
      )}
      <button onClick={formik.handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};

export default UserEditor;
