import { Input, Text } from "@mantine/core";

type LabeledInputProps = {
	label: string;
	inputProps?: React.ComponentProps<typeof Input>;
};

const LabeledInput = ({ label, inputProps }: LabeledInputProps) => (
	<div className="flex gap-6 items-center w-full max-w-6xl">
		<Text
			fw={500}
			className="w-1/5 whitespace-nowrap min-w-fit"
		>
			{label}
		</Text>
		<Input
			{...inputProps}
			className="flex-1 min-w-0"
			style={{ fontSize: "14px" }}
		/>
	</div>
);

export default LabeledInput;
