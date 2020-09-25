import Banner from "../../../../components/Banner";
import React from "react";
import "./styles.scss";
import PhotoForm from "../../components/PhotoForm";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        ></PhotoForm>
      </div>
    </div>
  );
}

export default AddEditPage;
