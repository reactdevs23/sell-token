import { Heading, Text } from "../../common";
import classes from "./BuyerList.module.css";

const BuyerList = () => {
  const data = [
    { name: "55zq3v", owned: 38.99 },
    { name: "55zq3v", owned: 3.86 },
    { name: "55zq3v", owned: 3.09 },
    { name: "55zq3v", owned: 3.0 },
    { name: "55zq3v", owned: 3.0 },
    { name: "55zq3v", owned: 2.46 },
    { name: "55zq3v", owned: 2.46 },
    { name: "55zq3v", owned: 2.31 },
    { name: "55zq3v", owned: 2.16 },
    { name: "55zq3v", owned: 1.85 },
    { name: "55zq3v", owned: 1.61 },
  ];

  // Find the maximum value for scaling
  const maxOwned = Math.max(...data.map((el) => el.owned));

  return (
    <section className={classes.wrapper}>
      <Heading lg medium primitive300>
        List of Buyers
      </Heading>
      <div className={classes.header}>
        <Text xs12 primitive500>
          Buyer
        </Text>
        <Text xs12 primitive500 textRight>
          % owned
        </Text>
      </div>
      <div className={classes.items}>
        {data?.map((el, i) => (
          <div className={classes.spaceBetween} key={i}>
            <Text primitive0 sm medium>
              <span className={classes.id}>{i + 1}.</span> {el.name}
            </Text>
            <p
              className={classes.owned}
              style={{
                background: `linear-gradient(
                  to left,
                  var(--Primitive-Transparent-8) ${
                    (el.owned / maxOwned) * 100
                  }%,
                  var(--Primitive-900) ${(el.owned / maxOwned) * 100}%
                )`,
              }}
            >
              {el.owned}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuyerList;
