import Breadcrumb from "@/components/ui/breadcrumb";
import TableFour from "@/components/Tables/TableFour";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

export default function AccountsContainer() {
  return (
    <div>
      <Breadcrumb pageName="Accounts" />

      <TableThree />
    </div>
  );
}
