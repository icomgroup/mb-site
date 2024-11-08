import accountQueries from "@/API/account/queries";
import SelectInput from "@/components/inputs/SelectInput";
import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

const CategoriesFillter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get("id") ?? "-1";
  const { data, isLoading, isError } = accountQueries.useMyCategoriesQuery();
  let content: ReactNode = (
    <option disabled value="-1">
      لا يوجد كتل
    </option>
  );
  if (isLoading)
    content = (
      <option value="-1" disabled>
        جار التحميل..
      </option>
    );
  if (isError)
    content = (
      <option value="-1" disabled>
        حصل امر ما خاطئ
      </option>
    );
  if (data && data.length !== 0) {
    content = data.map((folder) => (
      <option key={folder.id} value={folder.id}>
        {folder.name}
      </option>
    ));
  }
  const onChange = (val: string) => {
    if (val !== "-1") {
      searchParams.set("id", val);
    } else searchParams.delete("id");
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <SelectInput
      label="الكتلة"
      title="الكتلة"
      className="w-fit py-1 ms-3 cat-filter"
      name="catigory"
      value={currentValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="-1">الكل</option>
      {content}
    </SelectInput>
  );
};

export default CategoriesFillter;
