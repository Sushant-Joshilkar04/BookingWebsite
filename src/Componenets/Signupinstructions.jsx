import React from 'react'
import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

const Signupinstructions = () => {
  return (
    <div>
       <List>
      <List.Item icon={HiCheckCircle}>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item icon={HiCheckCircle}>At least one lowercase character</List.Item>
      <List.Item icon={HiCheckCircle}>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>
    </div>
  )
}

export default Signupinstructions
