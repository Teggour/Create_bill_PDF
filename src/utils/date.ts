type GetFormattedDateType = (date: Date, joinedBy?: string) => string;
type GetFormattedCurrentDateType = (joinedBy?: string) => string;

export const getFormattedDate: GetFormattedDateType = (date, joinedBy) => {
	const dd = String(date.getDate()).padStart(2, "0");
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const yyyy = date.getFullYear();

	const formattedDate = [dd, mm, yyyy].join(joinedBy || "/");

	return formattedDate;
};

export const getFormattedCurrentDate: GetFormattedCurrentDateType = (
	joinedBy
) => {
	const today = new Date();

	return getFormattedDate(today, joinedBy);
};
