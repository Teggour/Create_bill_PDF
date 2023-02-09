export interface IItem {
	id: number | string;
	name: string;
	price: number;
	qty: number;
}

export interface IItemsOfBill {
	items: IItem[];
}

export interface ICustomerInfo {
	fullname: string;
	email: string;
	phone: string;
	address: string;
}

export interface ICompanyInfo {
	companyName: string;
	companyEmail: string;
	companyAddress: string;
	companyPhone: string;
	logoUrl: string;
}

export interface IBillInfo {
	bill_no: string;
	trans_date: string;
}

export interface IBillData
	extends ICompanyInfo,
		ICustomerInfo,
		IBillInfo,
		IItemsOfBill {
	id: string;
	curr_date: string;
}

export interface IFormStepWithoutPrevProps<T>
	extends Omit<IFormStepProps<T>, "prev"> {}

export interface IFormStepProps<T> {
	state: T;
	handleChangeData: (companyInfo: T) => void;
	next: () => void;
	prev: () => void;
}
