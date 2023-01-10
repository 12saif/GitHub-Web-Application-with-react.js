import moment from "moment";
import useFetch from "use-http";
import React, { useEffect, useState } from "react";
import { Feed } from "./Components/Feed";
import GroupTitale from "./Components/GroupTital";
import Filter from "./Components/Filter";
import Repo from "./Components/Repo";
import  PageLoader  from "./Components/pageloader";
import { Box, SimpleGrid, Flex, Button } from "@chakra-ui/react";

function transformFilters({ startDate, endDate, language }) {
  const transformedFilters = {};

  const languageQuery = language ? `language:${language} ` : "";
  const dateQuery = `created:${startDate}..${endDate}`;

  transformedFilters.q = languageQuery + dateQuery;
  transformedFilters.sort = "stars";
  transformedFilters.order = "desc";

  return transformedFilters;
}

export default function App() {
  const { get, loading } = useFetch("https://api.github.com");

  const [viewType, setViewType] = useState("grid");
  const [dateJump, setDateJump] = useState("Day");
  const [language, setLanguage] = useState();

  const [repositories, setRepositories] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(moment().subtract(1, "day").format());

  useEffect(() => {
    const endDate = moment().subtract(1, "day").format();
    const startDate = moment(endDate).subtract(1, dateJump).format();

    setEndDate(endDate);
    setStartDate(startDate);

    setRepositories([]);
  }, [dateJump, language]);

  useEffect(() => {
    if (!startDate) {
      return;
    }

    const filters = transformFilters({ language, startDate, endDate });
    const filtersQuery = new URLSearchParams(filters).toString();

    get(`/search/repositories?${filtersQuery}`).then((data) => {
      setRepositories([
        ...repositories,
        {
          startDate,
          endDate,
          items: data.items,
        },
      ]);
    });
  }, [startDate]);

  return (
    <Box width="auto" minHeight={"100vh"} backgroundColor={"gray.100"}>
      <Feed />
      {repositories.length === 0 && loading && <PageLoader />}

      <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="82vw"
        mx="auto"
        mt="30px"
        flexDirection={["column", "column", "column", "row"]}
      >
        <GroupTitale
          startDate={repositories?.[0]?.startDate}
          endDate={repositories?.[0]?.endDate}
        />
        <Filter
          viewType={viewType}
          onViewChange={setViewType}
          dateJump={dateJump}
          onDateJumpChange={setDateJump}
          language={language}
          onlanguageChange={setLanguage}
        />
      </Flex>

      {(repositories ||[]).map((repoGroup, counter) => {
        const groupTitale = counter > 0 && (
          <Flex alignItems="center" justifyContent="center" mt="25px" mb="15px">
            <GroupTitale
              startDate={repoGroup.startDate}
              endDate={repoGroup.endDate}
            />
          </Flex>
        );
        return (
          <Box>
            {groupTitale}
            <Box width="82vw" mx="auto" mt="30px">
              <SimpleGrid
                columns={viewType === "list" ? 1 : [1, 1, 2, 3, 3]}
                spacing="15px"
              >

                {repoGroup.items.map((repo) => (
                  <Repo isListView={viewType === "list"} repo={repo} />
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        );
      })}

      <Flex alignItems="center" justifyContent="center" my="30px" mb="0px">
        <Button
          isLoading={loading}
          onClick={() => {
            setEndDate(startDate);
            setStartDate(moment(startDate).subtract(1, dateJump).format());
          }}
          colorScheme="blue"
          color="white"
          mb="30px"
        >
          Load Next Group...
        </Button>
      </Flex>
    </Box>
  );
}
