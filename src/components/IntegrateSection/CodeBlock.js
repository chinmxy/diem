import React from "react";
import Highlight from "react-highlight";

import "highlight.js/styles/stackoverflow-dark.css";

const CodeBlock = () => {
	return (
		<div>
			<Highlight language='javascript'>
				{`import merge
        
merge.api_key = "YOUR_API_KEY"

merge.checkout.Session.create(
  success_url="https://example.com/success",
  cancel_url="https://example.com/cancel",
  payment_method_types=["card"],
  line_items=[
    {
      "price": "price_H5ggYwtDq4fbrJ",
      "quantity": 2,
    },
  ],
  mode="payment",
)`}
			</Highlight>
		</div>
	);
};

export default CodeBlock;
