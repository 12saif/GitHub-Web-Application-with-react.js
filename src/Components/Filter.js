import React from "react";
import { FaCalendarDay, FaTable, FaList } from "react-icons/fa";
import {
  Stack,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import languages from "../Data/languages";

export default function Filter(props) {
  const {
    onViewChange,
    viewType,
    onDateJumpChange,
    dateJump,
    language,
    onLanguageChange,
  } = props;

  return (
    <Stack isInline mt={['15px', '15px', '15px', 0]}>
      <Select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        bg="white"
        _focus={{ boxShadow: "none" }}
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </Select>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          borderWidth={1}
          pl="20px"
          px="50px"
          fontWeight={400}
          leftIcon={<FaCalendarDay />}
          _focus={{ boxShadow: "none"}}
        >
          {/* <Icon name='calendar' mr={3} /> */}
          <Box as='span' textTransform='capatalize'>{ dateJump }</Box>
        </MenuButton>

        <MenuList>
          <MenuItem onClick={() => onDateJumpChange('day')}>Daily</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('week')}>Weekly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('month')}>Monthly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('year')}>Yearly</MenuItem>
        </MenuList>
      </Menu>

      <Stack
        isInline
        spacing={0}
        borderWidth={1}
        bg="white"
        rounded="5px"
        alignItems="center"
        ml="10px"
      >
        <Button
          h="100%"
          onClick={() => onViewChange("grid")}
          borderWidth={1}
          px="20px"
          fontWeight={400}
          roundedRight={0}
          leftIcon={<FaTable />}
          bg={viewType === "grid" ? "gray.200" : "white"}
          _focus={{ boxShadow: "none" }}
        >
          Grid
        </Button>
        <Button
          h="100%"
          onClick={() => onViewChange("list")}
          borderWidth={1}
          px="20px"
          fontWeight={400}
          roundedLeft={0}
          leftIcon={<FaList />}
          bg={viewType === "list" ? "gray.200" : "white"}
          _focus={{ boxShadow: "none" }}
        >
          List
        </Button>
      </Stack>
    </Stack>
  );
}
