import * as React from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { EmptyQuery } from "components/EmptyQuery";
import { Layout } from "components/Layout";
import { makeSearchPath } from "./search";
import { Loading } from "components/Loading";

export default function Index() {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Layout
      onSearch={(query) => router.push(makeSearchPath(query))}
      onSearchChange={(value) => setIsLoading(Boolean(value))}
    >
      <EmptyQuery />
      <Loading isLoading={isLoading} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
