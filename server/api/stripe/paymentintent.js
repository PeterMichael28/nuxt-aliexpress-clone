import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const stripe = new Stripe(
     'sk_test_51OXJu1K9kbSsvE1lvArA6q6Tujlcb3JDrifAvxFSG6Lo2Bchb46pfFRj4YeMON13nRWI9whOj5xiuw5Dfp72XIRc00i0rIwGIX',
    );

    return await stripe.paymentIntents.create({
      amount: Number(body.amount),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });
} );

