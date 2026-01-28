import { PERSONAL_INFO } from "@/constants/info";
import { Helmet } from "react-helmet-async";

export default function PageMeta() {
  return (
    <div>
      <Helmet>
        <title>
          {PERSONAL_INFO.firstName} | {PERSONAL_INFO.title}
        </title>
        <meta name="description" content={PERSONAL_INFO.bio} />
        <meta
          name="author"
          content={`${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`}
        />
        <meta
          property="og:title"
          content={`${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName} | ${PERSONAL_INFO.title}`}
        />
        <meta
          property="og:description"
          content={`${PERSONAL_INFO.bio.split(".")[0]}.`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
    </div>
  );
}
