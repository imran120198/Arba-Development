import React, { useState } from "react";
import {
  Flex,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Tc } from "../Components/T&C";
import { Navbar } from "../Components/Navbar";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdateProfile = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    toast("Profile Updated");
  };

  return (
    <Stack spacing={5}>
      <Navbar />
      <Box boxShadow={"md"} m={"auto"} mt={"4%"} w={"300px"} borderRadius={10}>
        <Box w={"100%"} borderRadius={10}>
          <Image
            w={"100%"}
            borderRadius={10}
            src="https://res.cloudinary.com/do1u1jc1s/image/upload/v1712295424/imageuploadtesting/image_1712295392632_97352.jpg"
          />
        </Box>
      </Box>
      <Box m={"auto"}>
        <Flex gap={"40px"}>
          <Tc />
          <Box>
            <Button
              backgroundColor={"#3182ce"}
              color={"white"}
              onClick={handleUpdateProfile}
            >
              Update Profile
            </Button>
          </Box>
        </Flex>
      </Box>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Profile</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Submit
              </Button>
              <Button onClick={handleCloseModal}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </Stack>
  );
};

export default Profile;
