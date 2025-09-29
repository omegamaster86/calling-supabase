export interface CallingResultItem {
	id: number;
	name: string;
}

export interface CompanyInfo {
	company_id: number;
	company_name: string;
	address: string;
	company_website: string;
	registered_phone_number: string;
	department_name: string;
	key_person_name: string;
	key_person_position: string;
	key_person_phone_number: string;
	key_person_email: string;
	key_person_note: string;
	salse_person: string;
	calling_result: string;
	next_calling_day: string;
}

export interface AttackLog {
	id: number;
	company_id: number;
	person_id: number;
	calling_start: string;
	calling_result: string;
	content: string;
	next_calling_day: string;
}
