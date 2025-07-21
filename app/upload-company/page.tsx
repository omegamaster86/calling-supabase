import ExcelUpload from "./excel-upload";
import RegisterNewCompany from "./register-new-company";

export default function UploadCompany() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">新規会社登録</h1>
      <ExcelUpload />
      <RegisterNewCompany />
    </div>
  );
}