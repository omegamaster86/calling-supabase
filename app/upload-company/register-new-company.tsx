"use client";

import { Button, Notification } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useActionState, useRef, useState } from "react";
import LabeledInput from "./_components/labeled-input";
import { type FormState, registerCompany } from "./actions";

const RegisterNewCompany = () => {
	const [state, formAction, isPending] = useActionState<FormState, FormData>(
		registerCompany,
		{ success: false },
	);
	const xIcon = <IconX size={20} />;
	const checkIcon = <IconCheck size={20} />;
	const formRef = useRef<HTMLFormElement>(null);
	const [hideError, setHideError] = useState(false);
	const [hideSuccess, setHideSuccess] = useState(false);

	return (
		<form ref={formRef} action={formAction}>
			<div className="flex flex-col gap-4 w-[540px] mt-4">
				<LabeledInput
					label="会社名"
					inputProps={{
						name: "company_name",
						required: true,
					}}
				/>
				<LabeledInput
					label="住所"
					inputProps={{
						name: "address",
					}}
				/>
				<LabeledInput
					label="業種"
					inputProps={{
						name: "industry",
					}}
				/>
				<LabeledInput
					label="登記電話番号"
					inputProps={{
						name: "registered_phone_number",
					}}
				/>
				<LabeledInput
					label="Web サイト"
					inputProps={{
						name: "website",
						type: "url",
					}}
				/>
				<LabeledInput
					label="部署"
					inputProps={{
						name: "department",
					}}
				/>
				<LabeledInput
					label="役職"
					inputProps={{
						name: "position",
					}}
				/>
				<LabeledInput
					label="氏名"
					inputProps={{
						name: "name",
					}}
				/>
				<LabeledInput
					label="電話番号"
					inputProps={{
						name: "phone_number",
						type: "tel",
					}}
				/>
				<LabeledInput
					label="メールアドレス"
					inputProps={{
						name: "email",
						type: "email",
					}}
				/>
			</div>

			{/* エラー通知 */}
			{state.error && !hideError && (
				<Notification
					icon={xIcon}
					color="red"
					title="エラー"
					className="mt-4"
					onClose={() => setHideError(true)}
				>
					{state.error}
				</Notification>
			)}
			{/* 成功通知 */}
			{state.message && !hideSuccess && (
				<Notification
					icon={checkIcon}
					color="green"
					title="成功"
					className="mt-4"
					onClose={() => setHideSuccess(true)}
				>
					{state.message}
				</Notification>
			)}

			<Button
				type="submit"
				loading={isPending}
				disabled={isPending}
				className="mt-4"
			>
				登録
			</Button>
		</form>
	);
};

export default RegisterNewCompany;
