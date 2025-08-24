import { Fragment, useState } from "react";
//import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classes from "../Input/AddModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "../CalculatePage/CalculatePage.css";
//import OkayIcon from "../UI/OkayIcon";
import Modal from "../UI/Modal";
//import ErrorIcon from "./ErrorIcon";

const AddModal = (props) => {
  // const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    numberOfPoints: "",
    amountPayable: "",
  });

  const onFormDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  /////////////////////////////////////////
  // ADDING PRODUCT
  /////////////////////////////////////////
  const onAddProductHandler = (e) => {
    e.preventDefault();

    // props.onCloseModal();
    //.numberOfUserData();
    props.setUserFormData((prevUserData) => {
      return [
        ...prevUserData,
        {
          id: Date.now().toString(),
          name: formData.name,
          numberOfPoints: +formData.numberOfPoints,
        },
      ];
    });

    props.onToast("success", "Points added successfully");
    // props.setShowModal({
    //   title: " Message",
    //   icon: <OkayIcon />,
    //   message: "Points added successfully",
    // });

    props.onCloseModal();

    // props.setRefetch((prev) => !prev);
    setFormData({
      name: "",
      numberOfPoints: "",
    });
  };

  return (
    <Fragment>
      {props.showModal && (
        <Modal
          title={props.showModal.title}
          icon={props.showModal.icon}
          message={props.showModal.message}
          onCloseModal={props.onCloseModal}
        />
      )}
      <div className={classes.backdrop} />

      <Card className={`${classes.modal}`}>
        <header>
          <span>Add New Points</span>

          <div onClick={props.onCloseModal} className={classes.close_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.4}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </header>
        <form onSubmit={onAddProductHandler}>
          <div className={classes.content}>
            <div className="form_control">
              <label htmlFor="name">Name:</label>

              <input
                name="name"
                id="name"
                value={formData.name}
                type="text"
                placeholder="Enter Name"
                onChange={onFormDataChangeHandler}
                required
              />
            </div>

            <div className="form_control">
              <label htmlFor="numberOfPoints">Number Of Points:</label>

              <input
                name="numberOfPoints"
                id="numberOfPoints"
                value={formData.numberOfPoints}
                type="number"
                min={0}
                step={1}
                placeholder="Enter number of points"
                onChange={onFormDataChangeHandler}
                required
              />
            </div>
          </div>

          <div className={classes.btn_container}>
            <Button className={classes.btn}>
              <span>Add</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </form>
      </Card>

      {/* {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          //   title={props.title}
          //   message={props.message}
          onConfirm={props.onAdd}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("overlay-root")
      )} */}
    </Fragment>
  );
};

AddModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  showModal: PropTypes.bool,
  onToast: PropTypes.func,
  namePlaceholder: PropTypes.string,
  pointsPlaceholder: PropTypes.string,
  setUserFormData: PropTypes.func,
  // backdrop: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func,
  setRefetch: PropTypes.func,
};

export default AddModal;
