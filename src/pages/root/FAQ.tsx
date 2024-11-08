import PageHeader from "@/components/UI/PageHeader";
import FAQList from "@/features/root/FAQ/FAQList";
import bg from "/public/faq-bg.jpg";
const FAQ = () => {
  return (
    <>
      <PageHeader
        bg={bg}
        title="هل تواجه أي مشاكل؟"
        subtitle="إليك إجابة على أشيع الأسئلة والاستفسارات التي قد تخطر على بالك"
      />
      <FAQList />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
