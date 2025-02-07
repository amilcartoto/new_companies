import { FormCreateCompanies } from "./components/FormCreateCustomer/FormCreateCompanies";

export default function CompaniesPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <FormCreateCompanies />
      </div>
    </div>
  );
}

