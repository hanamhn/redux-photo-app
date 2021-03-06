import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Input, Form, Label, Button } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
// import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
// import Images from "../../../../constants/images";

PhotoForm.propTypes = {};

PhotoForm.defaultProps = {};

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input name="title" id="title" placeholder="Eg: Wow nature ..." />
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select
          name="categoryId"
          id="categoryId"
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Photo</Label>
        <div>
          <Button type="button" outline color="primary">
            Random a photo
          </Button>
        </div>
        <div>
          <img
            width="200px"
            height="200px"
            src={Images.COLORFUL_BG}
            alt="colorful"
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;
