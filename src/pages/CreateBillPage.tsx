import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Steps, Typography } from "antd";
import { emptyBillData } from "../constants/mockData";
import {
	IBillData,
	IBillInfo,
	ICompanyInfo,
	ICustomerInfo,
	IItem,
} from "../interfaces/data";
import Bill from "../components/Bill/BIll";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import CustomerDataForm from "../components/CustomerDataForm/CustomerDataForm";
import CompanyDataForm from "../components/CompanyDataForm/CompanyDataForm";
import BillDataForm from "../components/BillDataForm/BillDataForm";
import BillItemsForm from "../components/BillItemsForm/BillItemsForm";
import { getFormattedCurrentDate } from "../utils/date";

const CreateBillPage: FC = () => {
	const [bill, setBill] = useState<IBillData>(emptyBillData);
	const [currentStep, setCurrentStep] = useState<number>(0);

	const handleChangeCustomerInfo = (customerInfo: ICustomerInfo): void => {
		setBill({ ...bill, ...customerInfo });
	};

	const handleChangeCompanyInfo = (companyInfo: ICompanyInfo): void => {
		setBill({ ...bill, ...companyInfo });
	};

	const handleChangeBillInfo = (billInfo: IBillInfo): void => {
		setBill({ ...bill, ...billInfo });
	};

	const handleChangeBillItems = (items: IItem[]): void => {
		setBill({
			...bill,
			items,
			id: uuidv4(),
			curr_date: getFormattedCurrentDate(),
		});
	};

	const next = (): void => {
		setCurrentStep((prevValue) => prevValue + 1);
	};

	const prev = (): void => {
		setCurrentStep((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
	};

	const steps = [
		{
			title: "Company info ",
			content: (
				<CompanyDataForm
					handleChangeData={handleChangeCompanyInfo}
					next={next}
					state={{
						companyName: bill.companyName,
						companyEmail: bill.companyEmail,
						companyPhone: bill.companyPhone,
						companyAddress: bill.companyAddress,
						logoUrl: bill.logoUrl,
					}}
				/>
			),
		},
		{
			title: "Customer info",
			content: (
				<CustomerDataForm
					handleChangeData={handleChangeCustomerInfo}
					next={next}
					prev={prev}
					state={{
						fullname: bill.fullname,
						email: bill.email,
						phone: bill.phone,
						address: bill.address,
					}}
				/>
			),
		},
		{
			title: "Bill info",
			content: (
				<BillDataForm
					handleChangeData={handleChangeBillInfo}
					next={next}
					prev={prev}
					state={{
						bill_no: bill.bill_no,
						trans_date: bill.trans_date,
					}}
				/>
			),
		},
		{
			title: "Bill items",
			content: (
				<BillItemsForm
					handleChangeData={handleChangeBillItems}
					next={next}
					prev={prev}
					state={bill.items}
				/>
			),
		},
		{
			title: "Bill PDF",
			content: <Bill bill={bill} />,
		},
	];

	const items = steps.map((item) => ({ key: item.title, title: item.title }));

	return (
		<PageTemplate>
			<Typography.Title>Create bill</Typography.Title>

			<>
				<Steps current={currentStep} items={items} />

				<div className="steps-content">
					{steps[currentStep].content}
				</div>
			</>
		</PageTemplate>
	);
};

export default CreateBillPage;
