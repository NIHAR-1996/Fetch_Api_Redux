import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const Detail = () => {
  const { photoId } = useParams();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ url: "", title: "" });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const detail = response.data.filter(
          (item) => item.albumId === parseInt(photoId)
        );
        setData(detail);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [photoId]);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="todo-container">
      <div className="heading">
        <h2>Detail View</h2>
      </div>
      <div className="grid-container">
        {data.map((item) => (
          <div className="todo-card" key={item.id}>
            <Card className="card">
              <Card.Body>
                <Card.Text>
                  <div className="todo-content">
                    <div>
                      <h3>{item.title}</h3>
                    </div>
                    <div>
                      <img src={item.thumbnailUrl} alt={item.title} />
                    </div>
                    <div>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          handleClickOpen({ url: item.url, title: item.title })
                        }
                      >
                        View Image
                      </Button>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Set the overlay color and opacity
          },
        }}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          {selectedImage.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};