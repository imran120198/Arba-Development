import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const Category = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    image: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://arba-backend-op50.onrender.com/category/")
      .then((response) => {
        setData(response.data.category);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("https://arba-backend-op50.onrender.com/category/add", formData)
      .then((response) => {
        console.log("Category added successfully:", response.data);
        setShowModal(false);
        fetchData(); // Refresh data after adding
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://arba-backend-op50.onrender.com/category/delete/${id}`)
      .then((response) => {
        console.log("Category deleted successfully");
        fetchData(); // Refresh data after deletion
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
      });
  };

  return (
    <div>
      <Box>
        <Button onClick={onOpen} colorScheme="green">
          Add
        </Button>
      </Box>
      <Table variant="striped" colorScheme="teal" w={"80%"} m={"auto"}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Slug</Th>
            <Th>Image</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((category) => (
            <Tr key={category.id}>
              <Td>{category.name}</Td>
              <Td>{category.slug}</Td>
              <Td>{category.image}</Td>
              <Td>
                <Button colorScheme="green">Edit</Button>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(category._id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Input
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Slug"
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
              />
              <Input
                placeholder="Image URL"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Category;
