import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "astro:env/server";

export const stripe = {
  createCheckout: defineAction({
    accept: "form",
    input: z.object({
      id: z.string(),
    }),
    handler: async (input) => {
      const stripe = new Stripe(STRIPE_SECRET_KEY);

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, price_1234) of the product you want to sell
            price: input.id,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "https://waku.gg/",
        cancel_url: "https://docs.stripe.com/payments/checkout",
      });

      if (!session.url) {
        throw new Error("Failed to create Stripe checkout session", {
          cause: session,
        });
      }

      return {
        url: session.url,
      };
    },
  }),
};
