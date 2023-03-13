import React, { useState } from 'react';
import Stripe from 'stripe';
// import 'bootstrap/dist/css/bootstrap.min.css';



// เรียกใช้libraly stripe
const stripe = new Stripe('sk_test_51MkoRSJCigzGyabZVvDpD0snRweDI0D7q0R5RwWB1Egr3DbGUgbsPLreN95OUedi1eleHjLHj17VscCU87v8ksFu00G86NC0ZW');

function PaymentForm() {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpMonth, setCardExpMonth] = useState('');
  const [cardExpYear, setCardExpYear] = useState('');
  const [cardCvc, setCardCvc] = useState('');


  // ปุ่มกดดำเนินการ
  const handleSubmit = async (event) => {
    event.preventDefault();

    // สร้างโทเค็นสำหรับบัตรผู้ใช้
    const { token } = await stripe.tokens.create({
      card: {
        number: cardNumber,
        exp_month: cardExpMonth,
        exp_year: cardExpYear,
        cvc: cardCvc,
      },
    });

    // สร้างหน่วยการผ่อน
    const charge = await stripe.charges.create({
      amount: amount * 100, // จำนวนหารเงินผ่อน
      currency: 'usd',
      source: token.id,
      description: 'First installment payment',
    });

    // function เก็บข้อมูลลง database
    // TODO: Implement this

    //สร้างการเรียกเก็บเงินที่เกิดซ้ำ(ต่อเดือน)
    const plan = await stripe.plans.create({
      amount: amount * 100 / 3, // จำนวนหารเงินผ่อน(ต่อเดือน)
      interval: 'month',
      currency: 'usd',
      product: {
        name: 'Installment payment plan',
      },
    });

    // จัดสรรการสมัครสมาชิก

    const subscription = await stripe.subscriptions.create({
      customer: charge.customer,
      items: [{
        plan: plan.id,
      }],
    });

    // สร้าง function update สถานะลง databases
    // TODO: Implement this
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
        <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardNumber">Card number</label>
        <input
          type="text"
          className="form-control"
          id="cardNumber"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
      </div>
      <div className='row'>
      <div className="form-group col-md-6">
          <label htmlFor="cardExpMonth">Expiration month</label>
          <input
            type="text"
            className="form-control"
            id="cardExpMonth"
            value={cardExpMonth}
            onChange={(event) => setCardExpMonth(event.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="cardExpYear">Expiration year</label>
          <input
            type="text"
            className="form-control"
            id="cardExpYear"
            value={cardExpYear}
            onChange={(event) => setCardExpYear(event.target.value)}
          />
        </div>
        </div>
        <div className="form-group">
        <label htmlFor="CCV">Cvc</label>
        <input
          type="text"
          className="form-control"
          id="cardCvcr"
          value={cardCvc}
          onChange={(event) => setCardCvc(event.target.value)}
        />
      </div>  
      <button type="submit">Submit</button>
    </form>
  );
}

export default PaymentForm;
