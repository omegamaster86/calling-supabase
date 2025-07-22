"use server";

import { createClient } from "@/lib/supabase/server";

export type FormState = {
	message?: string;
	error?: string;
	success?: boolean;
};

export async function registerCompany(
	prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	try {
		const supabase = await createClient();

		const company = {
			company_name_param: formData.get("company_name") as string,
			address_param: formData.get("address") as string,
			company_website_param: formData.get("website") as string,
			registered_phone_number_param: formData.get(
				"registered_phone_number",
			) as string,
			department_name_param: formData.get("department") as string,
			key_person_name_param: formData.get("name") as string,
			key_person_position_param: formData.get("position") as string,
			key_person_phone_number_param: formData.get("phone_number") as string,
			key_person_email_param: formData.get("email") as string,
		};

		if (!company.company_name_param) {
			return {
				error: "会社名は必須です",
				success: false,
			};
		}
		if (!company.address_param) {
			return {
				error: "住所は必須です",
				success: false,
			};
		}
		if (!company.registered_phone_number_param) {
			return {
				error: "登記電話番号は必須です",
				success: false,
			};
		}

		const { error } = await supabase.rpc("insert_new_company", company);

		if (error) {
			console.error("登録エラー:", error);
			return {
				error: "登録に失敗しました: " + error.message,
				success: false,
			};
		}

		return {
			message: "登録が完了しました",
			success: true,
		};
	} catch (error) {
		console.error("予期しないエラー:", error);
		return {
			error: "予期しないエラーが発生しました",
			success: false,
		};
	}
}
