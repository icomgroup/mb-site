import PageHeader from "@/components/UI/PageHeader";
import bg from "/files-bg.jpg";
import bgPc from "/files-desktop-bg.jpg";

const BlocksHero = () => {
  return (
    <PageHeader
      title="الملفات"
      bg={bg}
      bgPc={bgPc}
      subtitle="مؤلفات ميدبوس الطبية حاصلة على موافقة وزارة الاعلام على الطباعة والتداول بتاريخ 21/12/2023 ومحمية بإيداع مسجل في وزارة الثقافة (رقم المصنف 5037) وفق قانون حماية حقوق المؤلف رقم 62 للعام 2013 وإن أي عملية لطباعة أو تصوير أو تداول أي قسم من أعمال الفريق بدون إذن مباشر من صاحب العمل يعرضك للمسائلة والملاحقة القانونية."
    />
  );
};
export default BlocksHero;
