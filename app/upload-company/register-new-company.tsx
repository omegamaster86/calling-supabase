import LabeledInput from "./_components/labeled-input";

const RegisterNewCompany = () => {
	return (
		<div className="flex flex-col gap-4 w-[540px] mt-4">
			<LabeledInput label="会社名" />
			<LabeledInput label="住所" />
			<LabeledInput label="業種" />
			<LabeledInput label="登記電話番号" />
			<LabeledInput label="Web サイト" />
			<LabeledInput label="部署" />
			<LabeledInput label="役職" />
			<LabeledInput label="氏名" />
			<LabeledInput label="電話番号" />
			<LabeledInput label="メールアドレス" />
		</div>
	);
};

export default RegisterNewCompany;
