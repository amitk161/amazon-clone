import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket }] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="checkoutAd"
				/>
				{basket?.length === 0 ? (
					<div>
						<h2>Your shopping cart is empty.</h2>
						<p>
							You have no items in your cart. To buy one or more items, click
							"Add to cart" next to the item.
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your shopping cart.</h2>

						{basket?.map((it) => (
							<CheckoutProduct
								id={it.id}
								title={it.title}
								image={it.image}
								price={it.price}
								rating={it.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
