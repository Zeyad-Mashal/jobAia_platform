import React from "react";
import "./PreviewFeedBack.css";
import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";

const PreviewFeedback = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");

  return (
    <section className="preview_feedback">
      <h1>Your Feedbacks</h1>

      <div className="flex flex-wrap gap-4"></div>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="feedbacks">
        <div className="feedback" onClick={() => setOpenModal(true)}>
          <h3>Feedback 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed
            fugiat animi quas corrupti repudiandae voluptas culpa pariatur
            asperiores quos.
          </p>
        </div>
        <div className="feedback" onClick={() => setOpenModal(true)}>
          <h3>Feedback 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed
            fugiat animi quas corrupti repudiandae voluptas culpa pariatur
            asperiores quos.
          </p>
        </div>
        <div className="feedback" onClick={() => setOpenModal(true)}>
          <h3>Feedback 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed
            fugiat animi quas corrupti repudiandae voluptas culpa pariatur
            asperiores quos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreviewFeedback;
