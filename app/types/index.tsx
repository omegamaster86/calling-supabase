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
}

export interface AttackLog {
	id: number;
	company_id: number;
	person_id: number;
	attack_date: string;
	attack_result: string;
	attack_note: string;
}
