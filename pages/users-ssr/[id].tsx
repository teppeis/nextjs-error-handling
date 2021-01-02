import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";
import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));
    if (item) {
      return { props: { item } };
    } else {
      return { notFound: true };
    }
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
