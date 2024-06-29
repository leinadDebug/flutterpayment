import axios from "axios";
import { useEffect, useState } from "react";
export default function Payment() {
  const amount = 30000;
  const [txRef, setTxRef] = useState("");
  const [generate, setGenerate] = useState(false);

  // useEffect(() => {
  //   if (generate) {
  //     const generateReference = async () => {
  //       try {
  //         const response = await axios.get("/generate-txref");
  //         setTxRef(response.data.txRef);
  //         console.log(response.data.txRef);
  //       } catch (err) {
  //         console.error("The error generated is", err);
  //       } finally {
  //         setGenerate(false);
  //       }
  //     };
  //     generateReference();
  //   }
  // }, [generate]);

  
// ---second function
  // function makePayment() {
  //   setGenerate(true)
  //   FlutterwaveCheckout({
  //     public_key: "FLWPUBK_TEST-2ebb688c9fccc10043acb4cc1e4b2e1b-X",
  //     tx_ref: {txRef},
  //     amount: `${amount}`,
  //     currency: "NGN",
  //     payment_options: "card, mobilemoneyghana, ussd",
  //     redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
  //     meta: {
  //       consumer_id: 23,
  //       consumer_mac: "92a3-912ba-1192a",
  //     },
  //     customer: {
  //       email: "rose@unsinkableship.com",
  //       phone_number: "08102909304",
  //       name: "Rose DeWitt Bukater",
  //     },
  //     customizations: {
  //       title: "Next gen tech-fi literacy",
  //       description: "3 weeks summer bootcamp to elevate your summer adventure tapping into the real tech and finance.",
  //       logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
  //     }
  //   });
  // }
  const makePayment = () => {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-2ebb688c9fccc10043acb4cc1e4b2e1b-X",
      tx_ref: "txref-DI0NzMx13",
      amount: `${amount}`,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      meta: {
        source: "docs-inline-test",
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "test@mailinator.com",
        phone_number: "08100000000",
        name: "Ayomide Jimi-Oni",
      },
      customizations:
        // {
        //   title: "Flutterwave Developers",
        //   description: "Test Payment",
        //   logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
        // },
        {
          title: "Next gen tech-fi literacy",
          description:
            "3 weeks summer bootcamp to elevate your summer adventure tapping into the real tech and finance.",
          logo: "",
        },
      callback: function (data) {
        console.log("payment callback:", data);
      },
      onclose: function () {
        console.log("Payment cancelled!");
      },
    });
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  };
  const inputStyle = {
    height: "2rem",
    borderTop: "1px solid",
    borderBottom: "2px solid",
    borderRadius: "10px",
    borderColor: "GrayText",
    padding: "5px",
    fontSize: "15px",
  };
  return (
    <div
      style={{
        backgroundColor: "#00000",
        boxSizing: "border-box",
        borderRadius: "10px",
        display: "flex",
        gap: 10,
        boxShadow: "2px 2px 2px .9px rgb(0 0 0 / 90%)",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/dhlv2hnt4/image/upload/v1696857782/Hero_Image_xrhjgx.jpg"
          style={{
            opacity: "90%",
            height: "34rem",
            border: "2px solid",
            borderColor: "darkgrey",
            borderRadius: "10px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBlock: "20px",
          alignItems: "center",
        }}
      >
        <button
          disabled
          style={{
            backgroundColor: "#000",
            color: "whitesmoke",
            borderRadius: "5px",
            pointerEvents: "none",
            width: "70%",
          }}
        >
          Pay
        </button>
        <p style={{ maxWidth: "70%" }}>
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          minima provident eligendi.'
        </p>
        <form
          style={{
            fontSize: "20px",
            fontFamily: "mono",
            textAlign: "left",
            gap: 22,
            display: "flex",
            flexDirection: "column",
            padding: 10,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={style}>
              <label for="firstname">Firstname</label>
              <input
                style={inputStyle}
                name="firstname"
                placeholder="eg.john"
              ></input>
            </div>
            <div style={style}>
              <label for="lastname">Lastname</label>
              <input
                style={inputStyle}
                name="lastname"
                placeholder="eg.Doe"
              ></input>
            </div>
            <div style={{ display: "flex", gap: 18 }}>
              <div style={style}>
                <label for="email">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="eg.johndoe@gmail.com"
                  style={inputStyle}
                ></input>
              </div>

              <div style={style}>
                <label for="phonenumber">Phone_number</label>
                <input
                  name="phonenumber"
                  type="tel"
                  placeholder="eg.+23412345677"
                  style={inputStyle}
                ></input>
              </div>
            </div>
          </div>
          <button
            type="button"
            id="start-payment-button"
            onClick={makePayment}
            style={{
              border: "2px black solid",
              backgroundColor: "orange",
              // borderRadius: "50px",
            }}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
