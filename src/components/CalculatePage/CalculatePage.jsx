import { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./CalculatePage.css";
import AddModal from "../Input/AddModal";
import Modal from "../UI/Modal";
import FormatCurrency from "../Functions/FormatCurrency";
import ErrorIcon from "../UI/ErrorIcon";
import OkayIcon from "../UI/OkayIcon";
import Logo from "../../assets/images/KMZ.jpg";

const CalculatePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [render, setRender] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [amountPerPoint, setAmountPerPoint] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [userData, setUserData] = useState([]);

  //   const [userFormData, setUserFormData] = useState({
  //     name: "",
  //     numberOfPoints: "",
  //   });
  const [formData, setFormData] = useState({
    billAmount: "",
    // totalPoints: "",
    // numberToShare: "",
  });

  const [showAddModal, setShowAddModal] = useState(false);

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Calculating total points
  const calculateTotalPoints = (cartItem) => {
    return cartItem.reduce((acc, item) => acc + +item.numberOfPoints, 0);
  };

  // Calculating total amount
  const calculateTotalAmount = (cartItem) => {
    return cartItem.reduce((acc, item) => acc + +item.amountPayable, 0);
  };

  useEffect(() => {
    setTotalPoints(calculateTotalPoints(userData));
    setTotalAmount(calculateTotalAmount(userData));
    // console.log("nameValue: ", nameV);
  }, [userData, render]);

  const calculateBillHandler = (e) => {
    e.preventDefault();

    if (userData.length === 0) {
      setShowModal({
        title: "Error Message",
        icon: <ErrorIcon />,
        message: `Click on "add points" button to add new points for calculation`,
      });
      return;
    }

    const billAmountPerPoint = +formData.billAmount / +totalPoints;

    setAmountPerPoint(billAmountPerPoint);

    setUserData((prevUserData) => {
      const existingProduct = prevUserData.find((item) => item.id === item.id);

      if (existingProduct) {
        return prevUserData.map((item) =>
          item.id === item.id
            ? {
                ...item,
                amountPayable: +billAmountPerPoint * +item.numberOfPoints,
              }
            : item
        );
      }

      return {
        ...prevUserData,
      };
    });

    setShowModal({
      title: "Message",
      icon: <OkayIcon />,
      message: "Bill shared successfully",
    });
  };

  const deleteHandler = (id) => {
    setUserData((prevUserData) =>
      prevUserData.filter((item) => item.id !== id)
    );

    // calculateBillHandler();
  };

  const clearHandler = () => {
    setUserData([]);
    setAmountPerPoint(0);
    setFormData({
      billAmount: "",
    });
  };

  const showAddModalHandler = () => {
    setShowAddModal(true);
  };

  const closeShowAddModalHandler = () => {
    setShowAddModal(null);
  };

  const closeShowModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const tableRow =
    userData.length > 0 ? (
      userData.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}.</td>
            <td>{item.name}</td>
            <td>{item.numberOfPoints}</td>
            <td>
              {FormatCurrency(
                (+item.amountPayable ? item.amountPayable : 0).toFixed(2)
              )}
            </td>
            <td>
              <div
                onClick={() => {
                  deleteHandler(item.id);
                }}
                className="remove_btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td style={{ textAlign: "center" }} colSpan={4}>
          No data found
        </td>
      </tr>
    );

  return (
    <>
      {showModal && (
        <Modal
          title={showModal.title}
          icon={showModal.icon}
          message={showModal.message}
          onCloseModal={closeShowModalHandler}
        />
      )}

      {showAddModal && (
        <AddModal
          setUserFormData={setUserData}
          setShowModal={setShowModal}
          showModal={showModal}
          setRefetch={setRender}
          onCloseModal={closeShowAddModalHandler}
        />
      )}
      <Card className="input">
        <h2>Bill Calculator</h2>
        <div className="img_btn_container">
          <img  src={Logo} alt="logo" />

          <div className="addUserBtn">
            <Button className="btn" onClick={showAddModalHandler}>
              Add Points
            </Button>

            <Button className="btn" onClick={clearHandler}>
              Clear
            </Button>
          </div>
        </div>
        <form onSubmit={calculateBillHandler}>
          <div className="form_control">
            <label htmlFor="billAmount">Bill Amount:</label>

            <input
              onChange={formDataHandler}
              value={formData.billAmount}
              name="billAmount"
              id="billAmount"
              type="number"
              min={0}
              step={0.01}
              required
              // disabled
              // readOnly
              placeholder="Enter bill amount..."
            />
          </div>

          <div className="form_control">
            <div className="share_btn">
              {" "}
              <Button className="btn">Share Bill</Button>
            </div>
          </div>
        </form>
      </Card>

      <Card className="input">
        <div className="table_title">
          <p>Total points: {totalPoints}</p>
          <p>Amount per point: {FormatCurrency(amountPerPoint)}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Points</th>
              <th>Amount Payable</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>

          <tbody>{tableRow}</tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total Amount:</td>
              <td>
                {totalAmount ? FormatCurrency(totalAmount) : FormatCurrency(0)}
              </td>
            </tr>
          </tfoot>
        </table>

        <footer className="footer">
          {" "}
          <p>
            Developed by <span>Kobby-Menz </span>
            Technologies
          </p>
        </footer>
      </Card>
    </>
  );
};
export default CalculatePage;
