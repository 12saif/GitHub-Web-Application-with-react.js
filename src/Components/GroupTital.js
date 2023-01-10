import React from "react";
import moment from 'moment';
import { Flex, Text } from "@chakra-ui/react";

export default function GroupTitale({ startDate, endDate}) {
  if (!startDate || !endDate){
    return null;
  }
  const startMoment = moment(startDate)
  const endMoment = moment(endDate);


  return (
    <Flex>
      <Text fontSize="28px" fontWeight={700}>
        { startMoment.fromNow() }{" "}
        <Text
          fontSize="18px"
          fontWeight={100}
          color="grey.500"
          as="span"
          ml="20px"
        >
          {startMoment.format("MMMM D, YYYY")} - {endMoment.format("MMMM D, YYYY")}
        </Text>
      </Text>
    </Flex>
  );
}
