import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} type="button">
        Preciso de Ajuda
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="absolute flex w-100 flex-col items-center justify-center gap-6 rounded-lg bg-white p-12 shadow-lg top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <h2 className="text-center">
              Você este prestes a ser redirecionado para o Whatsapp!
            </h2>
            <div>
              <Button
                onClick={handleClose}
                type="button"
                className="bg-red-500"
              >
                Cancelar
              </Button>
              <Button onClick={handleClose} type="button">
                <a href="https://wa.me/5551995894049" target="_blank">
                  Continuar
                </a>
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
