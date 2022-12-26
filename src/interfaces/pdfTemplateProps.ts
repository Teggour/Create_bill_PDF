import { IBillData, IItem } from "./data";

export interface IPropsWithItems {
	items: IItem[];
}

export interface IPropsWithBill {
	bill: IBillData;
}
