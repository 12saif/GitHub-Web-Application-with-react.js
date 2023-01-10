import React from "react";
import { FaStar, FaPodcast, FaRegQuestionCircle } from "react-icons/fa";
import {Box,Flex,Image,Heading,Text,Link,Stack,Button,} from "@chakra-ui/react";
import moment from "moment";

export default function Repo(props) {
  const { isListView = false, repo } = props;

  return (
    <Flex 
    borderWidth={1}
    bg="white"
    p="15px" 
    rounded="5px" 
    alignItems="center"
    >
      <Flex flex={1} flexDir="column">
        {!isListView && (
          <Flex mb="15px" as="a" href={repo.owner.html_url}>
            <Image
              src={repo.owner.avatar_url}
              w={"35px"}
              h={"35px"}
              rounded="5px"
            />
            <Box ml="10px">
              <Heading fontSize="16px">{repo.owner.login}</Heading>
              <Text fontSize="13px">View Profile</Text>
            </Box>
          </Flex>
        )}

        <Box mb="15px" flex={1}>
          <Box mb="10px">
            <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
              {isListView && (
                <>
                  <Text as="a" href={repo.owner.html_url} trget="-blank">
                    {repo.owner.login}
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text as="a" href={repo.html_url} target="_blank">
                {repo.name}
              </Text>
            </Flex>
            <Text fontSize="14px" color="grey.600">
              <Box as={"span"} d={["none", "none", "inline", "inline"]}>
              Built by &middot;{" "}
              <Link
                fontWeight="{600}"
                href={repo.owner.html_url}
                target="-blank"
              >
                {repo.owner.login}
              </Link>{" "}
              &middot;
              </Box>{" "}
              {moment(repo.created_at).format("MMMM D, YYYY")}
            </Text>
          </Box>

          <Text fontSize="14px" color="grey.900">
            {repo.description}
          </Text>
        </Box>

        <Stack isInline spacing="10px">
          <Button
            as="a"
            href={`${repo.html_url}/stargazers`}
            cursor="pointer"
            leftIcon={<FaStar />}
            variant="link"
            fontSize="14px"
            iconSpacing="5px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            {repo.stargazers_count}
          </Button>
          <Button
            as="a"
            href={`${repo.html_url}/network/members`}
            cursor="pointer"
            leftIcon={<FaPodcast />}
            variant="link"
            fontSize="14px"
            iconSpacing="5px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            48
          </Button>
          <Button
            as="a"
            href={`${repo.html_url}/issues`}
            cursor="pointer"
            leftIcon={<FaRegQuestionCircle />}
            variant="link"
            fontSize="14px"
            iconSpacing="5px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            {repo.open_issues_count}
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image 
        src={repo.owner.avatar_url} 
        w={"105px"} 
        h={"105px"} 
        rounded="100%" />
      )}
    </Flex>
  );
}
