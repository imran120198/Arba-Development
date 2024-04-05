import {
  Button,
  Modal,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Tc() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let handleAccept = () => {
    localStorage.setItem("Term", true);
    onClose();
  };
  let location = useLocation();
  useEffect(() => {
    let show = JSON.parse(localStorage.getItem("Term"));
    if (!show) {
      onOpen();
    }
  }, []);
  return (
    <>
      {location.pathname == "/profile" && (
        <Button colorScheme="blue" onClick={onOpen}>
          See T&C
        </Button>
      )}
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Text>TERMS & CONDITIONS</Text>

          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            modi voluptatibus deleniti dolores assumenda, ad tempora ipsa
            doloribus. Quo facere dicta delectus voluptate eaque in dignissimos
            facilis ut mollitia placeat, nobis quasi neque culpa fugiat id.
            Obcaecati quod pariatur nesciunt provident sunt iste. Voluptas dolor
            delectus voluptatum sint, fuga reprehenderit! ad tempora ipsa
            doloribus. Quo facere dicta delectus voluptate eaque in dignissimos
            facilis ut mollitia placeat, nobis quasi neque culpa fugiat id.
            Obcaecati quod pariatur nesciunt provident sunt iste. Voluptas dolor
            delectus voluptatum sint, fuga reprehenderit!
          </ModalBody>

          <ModalFooter
            gap={2}
            display={"flex"}
            w={"100%"}
            justifyContent={"space-around"}
          >
            <Button colorScheme="blue" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => handleAccept()} mr={3}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
