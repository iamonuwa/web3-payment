import React, { useRef } from "react";
import styled from "styled-components";

const PaymentWrapper = styled.div`
	border: 1px solid #dddddd;
	padding: 2rem;
	width: max-content;
	border-radius: 0.5rem;
`;

const PaymentForm = styled.div``;

const PaymentFormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
`;

const PaymentLabel = styled.label`
	font-size: 0.8rem;
`;

const PaymentInput = styled.input`
	padding: 1rem;
	font-size: 1rem;
	border-radius: 0.5rem;
	border: 1px solid #dddddd;
	outline: none;
`;

const PaymentButton = styled.button`
	border: none;
	padding: 1rem;
	cursor: pointer;
	border-radius: 0.5rem;
	outline: none;
`;

export default function Payment() {
	const fromRef = useRef(null);
	const toRef = useRef(null);
	const amountRef = useRef(null);

	function processPayment() {
		console.log(fromRef.current.value, toRef.current.value, amountRef.current.value);
	}
	return (
		<PaymentWrapper>
			<PaymentForm>
				<PaymentFormGroup>
					<PaymentLabel htmlFor="for">For</PaymentLabel>
					<PaymentInput ref={fromRef} type="text" placeholder="0x0..." />
				</PaymentFormGroup>
				<PaymentFormGroup>
					<PaymentLabel htmlFor="to">To</PaymentLabel>
					<PaymentInput ref={toRef} type="text" placeholder="0x0..." />
				</PaymentFormGroup>
				<PaymentFormGroup>
					<PaymentLabel htmlFor="amount">Amount</PaymentLabel>
					<PaymentInput ref={amountRef} type="number" placeholder="" />
				</PaymentFormGroup>
				<PaymentFormGroup>
					<PaymentButton onClick={processPayment}>Make payment</PaymentButton>
				</PaymentFormGroup>
			</PaymentForm>
		</PaymentWrapper>
	);
}
