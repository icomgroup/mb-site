import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import classNames from "classnames";
import { FAQ } from "@/API/faq/types";
import { ReactQueryPage } from "@/utils/apiHelpers";

type CustomToggleProps = {
  children: React.ReactNode;
  eventKey: string;
  containerClass: string;
  linkClass: string;
  callback?: (eventKey: string) => void;
};

const CustomToggle = ({
  children,
  eventKey,
  containerClass,
  linkClass,
  callback,
}: CustomToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      className={classNames(linkClass, {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <Card.Header>
        <h5 className={containerClass}>
          {children}{" "}
          <FeatherIcon
            icon="chevron-down"
            className="icon-xs accordion-arrow"
          />
        </h5>
      </Card.Header>
    </div>
  );
};

const FAQContent = ({ data }: { data: ReactQueryPage<FAQ>[] }) => {
  return (
    <div id="faqContent">
      <Accordion
        defaultActiveKey="0"
        className="custom-accordionwitharrow"
        id="accordionExample"
      >
        {(data || []).map((page, idx) =>
          page.data.result.data.map((item, index) => {
            return (
              <Card className="mb-4 border rounded-sm" key={index.toString()}>
                <CustomToggle
                  eventKey={String(index + idx)}
                  containerClass="my-1 fw-medium"
                  linkClass="text-dark toggler"
                >
                  {item.question}
                </CustomToggle>
                <Accordion.Collapse eventKey={String(index + idx)}>
                  <Card.Body className="text-muted pt-1">
                    {item.answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })
        )}
      </Accordion>
    </div>
  );
};

export default FAQContent;
