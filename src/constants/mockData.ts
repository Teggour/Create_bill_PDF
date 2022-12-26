import { IBillData } from "../interfaces/data";
import { getFormattedCurrentDate } from "../utils/date";

export const billData: IBillData = {
	id: "1q2w3e4r5t6y7u8i9o0p",
	bill_no: "1234567890",
	logoUrl: `${process.env.PUBLIC_URL}/bill-logo.png`,
	fullname: "Full Name",
	email: "customer@email.com",
	phone: "+38 (070) 777-77-77",
	address: "777 Street, City, Country",
	trans_date: "30-02-2022",
	curr_date: getFormattedCurrentDate("-"),
	companyName: "Company Name",
	companyEmail: "company@email.com",
	companyAddress: "333 Street, City, Country",
	companyPhone: "+38 (030) 333-33-33",
	items: [
		{
			id: 1,
			name: "First Item",
			price: 300.0,
			qty: 3,
		},
		{
			id: 2,
			name: "Second Item",
			price: 199.99,
			qty: 2,
		},
		{
			id: 3,
			name: "Third Item",
			price: 77.88,
			qty: 1,
		},
	],
};

export const emptyBillData: IBillData = {
	id: "",
	bill_no: "",
	logoUrl: "",
	fullname: "",
	email: "",
	phone: "",
	address: "",
	trans_date: "",
	curr_date: "",
	companyName: "",
	companyEmail: "",
	companyAddress: "",
	companyPhone: "",
	items: [],
};

export const emptyItem = {
	id: "",
	name: "",
	price: 0,
	qty: 0,
};
