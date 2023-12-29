import { Modal, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SubmitModal = (props) => {
  console.log("prop", props?.open);
  const { open, setOpen } = props;
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff !important",
    border: "none",
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (props.open === true) {
      setTimeout(() => {
        navigate("/ad-type");
      }, 600);
    }
  }, [props.open === true]);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <Paper sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Submitted
        </Typography>
      </Paper>
    </Modal>
  );
};

export default SubmitModal;
