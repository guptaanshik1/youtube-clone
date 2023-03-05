import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";

const VoiceSearchModal = ({ isOpen, onClose }) => {
  return (
    <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h={"400px"} mt={"20px"}>
        <ModalHeader ml={"auto"}>
          <Box
            background={"gray.100"}
            rounded={"full"}
            p={"4px"}
            _hover={{ background: "gray.200" }}
          >
            <MdClose size={32} cursor={"pointer"} onClick={() => onClose()} />
          </Box>
        </ModalHeader>
        <ModalBody>
          <Text fontWeight={"light"} fontSize={"24px"}>
            Listening....
          </Text>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            mt={"150px"}
            flexDir={"column"}
            mx={"auto"}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                width: "80px",
                height: "80px",
                background: "lightgray",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                mx={"auto"}
                mt={"8px"}
                w={"60px"}
                background={"#C20000"}
                h={"60px"}
                rounded={"full"}
                position={"relative"}
                zIndex={1}
              >
                <BsFillMicFill size={24} color={"#FFFFFF"} />
              </Flex>
            </motion.div>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VoiceSearchModal;
