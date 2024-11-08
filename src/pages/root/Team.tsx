import teamQueries from "@/API/team/queries";
import Error from "@/components/feedback/Error";
import NoData from "@/components/feedback/NoData";
import PageHeader from "@/components/UI/PageHeader";
import TeamList from "@/features/root/team/TeamList";
import { TeamModal } from "@/features/root/team/TeamModal";
import InfiniteScroll from "@/libs/infiniteScroll";
import { ReactNode } from "react";

import bg from "/public/team-bg.jpg";
import TeamSkeleton from "@/features/root/team/TeamSkeleton";
import { Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Team = () => {
  const teamQuery = teamQueries.useGetAllQuery();
  const { data, isError, isLoading, error, isSuccess } = teamQuery;
  let content: ReactNode = <NoData className="mt-5" />;
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 991px)",
  });
  if (
    isSuccess &&
    data &&
    data.pages.length !== 0 &&
    data.pages[0].data.result.data.length !== 0
  ) {
    content = (
      <>
        <InfiniteScroll
          className="row"
          query={teamQuery}
          loader={<TeamSkeleton />}
          scrollThreshold={isMobile ? "2500px" : isTablet ? "1500px" : "1000px"}
        >
          <TeamList list={data.pages} />
        </InfiniteScroll>
        <TeamModal
          hasMore={teamQuery.hasNextPage}
          fetchNext={teamQuery.fetchNextPage}
          list={data.pages}
        />
      </>
    );
  }
  return (
    <>
      <PageHeader
        bg={bg}
        title="تعرف على فريقنا المميز"
        subtitle="يضم ميدبوس مجموعة من الأطباء المقيمين والخريجين الأوائل وطلبة الطب المميزين من مختلف الجامعات السورية وفريق دعم تقني وإداري ولوجستي ضمن فريق واحد متكامل يعمل على توفير جميع ما تحتاج إليه في مكان واحد"
      />
      <section
        className="pb-5  mt-5 mt-sm-7 position-relative"
        data-aos="fade-up"
      >
        <Container className="my-5">
          {isError && <Error error={error} />}
          {isLoading && (
            <Row>
              <TeamSkeleton />
            </Row>
          )}
          {isSuccess && content}
        </Container>
      </section>
    </>
  );
};

export default Team;
