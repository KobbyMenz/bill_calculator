import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Card className={classes.card}>
        <p className={classes.message}>
          Welcome to Bill Calculator App. Click on the button to calculate for
          new bill
        </p>
        <Button>Calculate new bill</Button>
      </Card>
    </>
  );
};
export default HomePage;
