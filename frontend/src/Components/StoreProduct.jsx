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

const StoreProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("https://arba-backend-op50.onrender.com/product/getall")
      .then((response) => {
        setData(response.data.Products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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
      .post("https://arba-backend-op50.onrender.com/product/add", formData)
      .then((response) => {
        console.log("Category added successfully:", response.data);
        setShowModal(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://arba-backend-op50.onrender.com/product/delete/${id}`)
      .then((response) => {
        console.log("Product deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  console.log(data);

  return (
    <div>
      <Button onClick={onOpen} colorScheme="green">
        Add
      </Button>
      <Table variant="striped" colorScheme="teal" w={"80%"} m={"auto"}>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Image</Th>
            <Th>Price</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((product) => (
            <Tr key={product.id}>
              <Td>{product.title}</Td>
              <Td>{product.image}</Td>
              <Td>{product.price}</Td>
              <Td>{product.description}</Td>
              <Td>
                <Button colorScheme="green">Edit</Button>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(product._id)}
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
          <ModalHeader>Add Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Input
                placeholder="Title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <Input
                placeholder="Image URL"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              <Input
                placeholder="price"
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              <Input
                placeholder="description"
                type="text"
                name="description"
                value={formData.description}
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

export default StoreProduct;
